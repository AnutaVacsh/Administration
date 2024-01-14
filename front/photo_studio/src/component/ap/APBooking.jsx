import { Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from "react";

import BookEl from "./BookEl";

function APBooking(){
    const [activeLink, setActiveLink] = useState();
    const [booking, setbooking] = useState();
    const [bookingLight, setBookingLight] = useState();
    const [light, setLight] = useState();
    const [hall, setHall] = useState();
    const [back, setBack] = useState();
    const [color, setColor] = useState();

    let bookAll = [];

    // const arrAll = [{id: 1, date: "23.04.23", time: 12, number: "С70", light: ["лазер", "генератор дыма"], back: "", priceAll: 2100, state: "рассматривается"},
    // {id: 2, date: "23.04.23", time: 12, number: "С70", light: ["лазер", "генератор дыма"], back: "", priceAll: 2100, state: "подтверждён"}]

    useEffect(() => {
        fetch("http://localhost:8080/Booking/allBooking", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => sort(data)) 
        // .then(sort()) //сортируем массив
        .catch((e)=> console.log(e.message))

        fetch("http://localhost:8080/BookingLight/allBookingLight", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setBookingLight(data))
        .catch((e)=> console.log(e.message))

        fetch("http://localhost:8080/Light/allLight", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setLight(data))
        .catch((e)=> console.log(e.message))

        fetch("http://localhost:8080/Hall/allHall", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setHall(data))
        .catch((e)=> console.log(e.message))

        fetch("http://localhost:8080/Back/allBack", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setBack(data))
        .catch((e)=> console.log(e.message))

        fetch("http://localhost:8080/BackColor/allBackColor", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setColor(data))
        .catch((e)=> console.log(e.message))
    }, [])

    function sort(booking){
        let arr = booking.sort((a, b) => a.year > b.year ? -1: 1); 
        console.log(arr)
        let arr2 = arr.sort((a, b) => a.month > b.month ? -1: 1); 
        let arr3 = arr2.sort((a, b) => a.day > b.day ? -1: 1); 
        setbooking(arr3)
    }

    if(bookingLight && light && booking && back && color && hall){ //проверка здесь!!!!
        doNormArray()
    } 

    function doNormArray(){
        let arr = [];

        //записываем в массив arr брони с светом
        if(bookingLight && light && booking)
        booking.forEach(b => {
            //смотрим, если бронь прошедшая меняем её статус
            let today = new Date();
            let bookingDate = new Date(b.year, b.month, b.day);
            if(today > bookingDate && b.state != 'прошедшая'){
                fetch("http://localhost:8080/Booking/editState/"+b.id, {
                    method: "PUT",
                    headers: {"Content-Type":"application/json"},
                    body: "прошедшая"
                })
                .then(()=>{console.log("edit state")})
                .catch((e)=> console.log(e.message));

            }

            let l = [];
            let bl = bookingLight.filter(i => i.idBooking == b.id)

            if(bl.length != 0){
                for(let i = 0; i < bl.length; i ++){
                    let idL = bl[i].idLight;
                    l.push(light.filter(i => i.id == idL)[0])
                }
            }

            //фон цвет
            let bck = color.filter(i => i.id == b.idBack)[0]
            // console.log(bck)
            //фон фон
            let bc = back.filter(i => i.id == bck.idBack)[0]
            // console.log(bc)
            l.push({title: bc.title + "-" + bck.color})
            
            b.light = l;

            // зал
            let h = hall.filter(i => i.id == b.idHall)[0].numberHall
            b.number = h;
            
            //дата date
            let date = b.year + "." + (Number(b.month)+1) + "." + b.day;
            b.date = date;
            
            arr.push(b);
        })
        
        bookAll = arr
        console.log(bookAll)

        
    }

    // const arrPast = arrAll.filter((e) => e.state === "прошедшая");
    // const arrNow = arrAll.filter((e) => e.state === "подтверждённые");
    // const arrCencel = arrAll.filter((e) => e.state === "отклонён");
    // const arrWait = arrAll.filter((e) => e.state === "рассматривается");

    return(
        <>
            <nav>
                <Link to="/ap/booking/past" className={activeLink === 1? "active": ""} onClick={() => setActiveLink(1)}>Прошедшие</Link>
                <Link to="/ap/booking/now" className={activeLink === 2? "active": ""} onClick={() => setActiveLink(2)}>Актуальные</Link>
                <Link to="/ap/booking/cancel" className={activeLink === 3? "active": ""} onClick={() => setActiveLink(3)}>Отменённые</Link>
                <Link to="/ap/booking/wait" className={activeLink === 4? "active": ""} onClick={() => setActiveLink(4)}>Ждут подтверждения</Link>
                <Link to="/ap/booking/" className={activeLink === 5? "active": ""} onClick={() => setActiveLink(5)}>Все</Link>
		    </nav>
            <Routes >
                    <Route path='/past' element = {<BookEl list={bookAll.filter((e) => e.state === "прошедшая")}/>}/>
                    <Route path='/now' element = {<BookEl list={bookAll.filter((e) => e.state === "подтверждён")}/>}/>
                    <Route path='/cancel' element = {<BookEl list={bookAll.filter((e) => e.state === "отклонён")}/>}/>
                    <Route path='/wait' element = {<BookEl list={bookAll.filter((e) => e.state === "рассматривается")}/>}/>
                    <Route path='/' element = {<BookEl list={bookAll}/>}/>
                    <Route path='*' element = {<p>СТРАНИЦА НЕ НАЙДЕНА</p>}/>
            </Routes>
        </>
    )
}
export default APBooking;