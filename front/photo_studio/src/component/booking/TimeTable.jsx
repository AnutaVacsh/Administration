import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../../context/BookingContext";

function TimeTable({rend, newRend, arrTable, week}){
    const {setTime} = useContext(BookingContext);
    const [book, setBook] = useState([]); //выбранные брони
    // const [bookDB, setbookDB] = useState([]); //брони из бд
    const [active, setActive] = useState([]);
    // const [week, setWeek] = useState([]); //массив с датами для заголовка
    // const [arrTable, setArrTable] = useState([]); //таблица я ячейками
    const time = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"]
    const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    const day = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    let p = "10:00-11:00 1500p";

    const table = arrTable.map((item, index) => 
    { 
        return <div key={index} className={(item.state === 0? "f": "b") + (active.includes(item)? " active": "")} 
        onClick={() => Booked(item.state, item)}>{active.includes(item)? item.time + ":00-" + (Number(item.time)+1) + ":00": ""}</div>
    })

    function Booked(status, obj){
        if(status === 1) return;
        if(active.includes(obj)){
            let t = active;
            t.splice(active.indexOf(obj), 1);
            setActive(t)
            setTime(t);
            setBook(t); 
            newRend(rend === 0? 1:0)
            return
        }
        if(book.length === 5){
            alert("Нельзя забронировать больше 5 мест");
            return;
        }

        let temp = active;
        temp.push(obj);
        setActive(temp) //окрашиваю клеточку

        setTime(temp);
        setBook(temp); 

        newRend(rend === 0? 1:0)

        //в массиве хроняться объекты, запоминаю дату и время
    }

    return(
        <div className="timetable">
            <div className="date">
                <div className="img1"></div>
                <div className="img2"></div>
                <p>{week.length != 0 && week[0].db.getDate() + " - " + week[6].db.getDate() + " " + month[week[6].db.getMonth()]}</p> 
            </div>
            <div className="ul">
                {week.map((item, index)=> <p key = {index}>{item.text}</p>)}
            </div>
            <div className="triple">
                <div className="timeB">
                    {time.map((item, index)=> <p key={index}>{item}</p>)}
                </div>
                <div className="table">
                    {/*  105 */}
                    {table}
                    
                </div>
                <div className="timeB">
                    {time.map((item, index)=> <p key={index}>{item}</p>)}
                </div>
            </div>
        </div>
    )
}

export default TimeTable;