import '../../css/bookingStyle.css'
import ChoiceHall from './СhoiseHall'
import ChoiseLight from './ChoiseLight';
import ChoiseBack from './ChoiseBack';
import { useState, useEffect } from 'react';
import {BookingContext} from '../../context/BookingContext'
import TimeTable from './TimeTable';
import Price from './Price';

function Booking(){
    const [hall, setHall0] = useState();
    const [light, setLight] = useState([]);
    const [back, setBack] = useState();
    const [time, setTime] = useState([]);
    const [rend, newRend] = useState(0);
    console.log(hall, light, back, time);

    function setHall(value){
        setHall0(value);
        if(value){
            fillTable(createTable(value.id, week))
        }
    }

    const [bookDB, setbookDB] = useState([]); //брони из бд
    const [week, setWeek] = useState([]); //массив с датами для заголовка
    const [arrTable, setArrTable] = useState([]); //таблица я ячейками
    const t = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]
    const tWeek = [];

    // console.log(choiseHall)

    useEffect(() => {
        fetch("http://localhost:8080/Booking/allBooking", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setbookDB(data.filter(d => d.status != "отклонён")))
        .catch((e)=> console.log(e.message))
        
        // const arrBook = bookDB.map((item)=> {
        //     console.log(item.year, item.month, item.day)
        //     item.date = new Date(item.year, item.month, item.day)
        //     return item
        // })
        // setbookDB(arrBook)
        // console.log(arrBook)
    }, [])
    

    //отрисовка таблицы
    useEffect(()=>{
        // setbookDB([{id: 1, year: 2023, month: 4, day: 25, time: 10, idHall:1, idBack:0, idUser: 1, state: 1}])
        const day = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]

        //следующие 7 дней, начиная с завтрашнего числа
        const date = new Date(new Date().getTime() + 24 * 60 * 60 *1000); // завтрашняя дата
        const date1 = new Date
        let newDate;
        const year = date.getFullYear();
        const month = date.getMonth();
        const dateForWeak = date.getDay();
        const d = date.getDate();

        // формируем массив с датами
        // каждая дата хранит текстовое представление и полную дату
        for(let i = 0; i < 7; i ++){
            newDate = new Date(year, month, d+i);
            tWeek.push({text:day[(dateForWeak+i)%7] +" " +newDate.getDate(), db: newDate});
        }
        setWeek(tWeek)
        createTable(-1, tWeek)
    }, [])

    //сначала просто делаем пустую таблицу, массив в котором храняться данные о каждой броне
    function createTable(nowHall, week){
        const _arrTable = [];

        week.forEach(w=> {
            t.forEach(t => {
                _arrTable.push({time: Number(t.substring(0, 2)), date: w.db, hall: nowHall, state: 0})
            })
        });
        setArrTable(_arrTable);
        return _arrTable;
    }
    
    //заполняем таблицу, отмечаем занятые брони
    function fillTable(_arrTable){
        let arr = _arrTable.map((item) => {
            //занят ли этот год
            let bDate = bookDB.filter(b => b.year == item.date.getFullYear() && b.month == item.date.getMonth() && b.day == item.date.getDate());
            let bTime = [];

            //дата
            if(bDate.length != 0){ bTime = bDate.filter(b => b.time === item.time);}
            let bHall = [];

            //время
            if(bTime.length != 0){ bHall = bTime.filter(b => b.idHall === item.hall)}
            if(bHall.length != 0) item.state = 1;

            // если да, то state = 1
            return item;
        })
        setArrTable(arr)
    }
    

    return(
        <BookingContext.Provider value={{hall, setHall, light, setLight, back, setBack, time, setTime}}>
            <article>
                <h1>БРОНЬ СТУДИИ</h1>
                <ChoiceHall/>
                <div>
                    <h2>Выберите свет</h2>
                    <ChoiseLight/>
                </div>
                <div>
                    <h2>Выберите фотофон</h2>
                    <ChoiseBack/>
                </div>
                <div>
                    <h2 className="time">Выберите время</h2>
                    <div className="free">
                        <div className="f"></div>
                        <p>Свободно</p>
                        <div className="b"></div>
                        <p>Занято</p>
                    </div>
                </div>
                <TimeTable rend={rend} newRend = {newRend} choiseHall = {hall} week = {week} arrTable = {arrTable}/>
                <Price quantity={time.length}/>
            </article>
        </BookingContext.Provider>
    )
}

export default Booking;