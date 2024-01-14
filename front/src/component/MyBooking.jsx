import '../css/myBookingStyle.css'
import { useState, useEffect } from 'react';

function MyBooking(){
    const [booking, setbooking] = useState();
    const [bookingLight, setBookingLight] = useState();
    const [light, setLight] = useState();
    const [hall, setHall] = useState();
    const [back, setBack] = useState();
    const [color, setColor] = useState();
    let bookAll = [];

    useEffect(() => {
        // fetch("http://localhost:8080/Booking/allBooking", {
        //     mode: 'cors',
        //     method: 'GET',
        // })
        // .then(res => res.json())
        // .then(data => setbooking(data))
        // .catch((e)=> console.log(e.message))

        fetch("http://localhost:8080/Booking/userBooking/"+sessionStorage.getItem('IdUser'), {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setbooking(data))
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

    if(bookingLight && light && booking && back && color && hall){ //проверка здесь!!!!
        doNormArray()
    } 

    function doNormArray(){
        let arr = [];

        //записываем в массив arr брони с светом
        if(bookingLight && light && booking)
        booking.forEach(b => {
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

    function cancel(id) {
        console.log("отменить " + id)

        fetch("http://localhost:8080/Booking/editState/"+id, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: "отклонён"
        })
        .then(()=>{console.log("edit state")})
        .then(window.location.reload())
        .catch((e)=> console.log(e.message));

        refund();
    }

    // возврат средств
    function refund(){
        alert("Деньги скоро вернутся на счёт")
    }

    let tr;
    if(bookAll){
        tr = bookAll.map((item) => 
            <tr key = {item.id}>
                <td>{item.date}</td>
                <td>{item.time + ":00-" + (Number(item.time)+1) + ":00"}</td>
                <td>{item.number}</td>
                <td>
                    <ul type = 'none'>
                        {item.light.map((item2, index) => 
                            <li key = {index}>{item2.title}</li>
                        )}
                    </ul>
                </td>
                <td>{item.price + "p."}</td>
                <td className={"colorState " +colorState(item.state)}>{item.state}</td>
                <td>
                    {(item.state != "отклонён" && item.state != "прошедшая") && <a href='#' onClick={() => cancel(item.id)}>Отменить</a>}
                </td>
            </tr>
        )
    }

    function colorState(str){
        if(str === "рассматривается") return "p";
        if(str === "подтверждён") return "b";
        if(str === "отклонён") return "r";
        else return "";
    }

    return(
        <article>
            <h1>МОИ БРОНИ</h1>
            <table>
                <thead>
                    <tr>
                        <th>дата</th>
                        <th>время</th>
                        <th>зал</th>
                        <th>дополнительные<br/>брони</th>
                        <th>общая <br/>стоимость</th>
                        <th>статус</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tr}
                </tbody>
            </table>
        </article>
    )
}

export default MyBooking;