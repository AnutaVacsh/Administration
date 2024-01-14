import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookingContext } from "../../context/BookingContext";
import { UserContext } from "../../context/UserComtext";

function Price({quantity}){
    const {hall, light, back, time} = useContext(BookingContext);

    function ollPrice(){
        let p = 0;

        if(time.length != 0) 
            time.forEach(t => {
                p += priceOneBooking(t);
            })
        
        else light.forEach(l => {
                p += l.price;
            });
        sessionStorage.setItem('price', p)
        return p
    }

    function priceOneBooking(t){
        let p = 0;

        light.forEach(l => {
            p += l.price;
        });

        if(hall){
            if(t.date.getDay() < 5) p += hall.priceDays;
            else p += hall.priceEnd;
        }
        return p;
    }

    function booking(e){
        e.preventDefault();
        let errorString = [];

        if(!hall) errorString.push ("Выберите зал");
        if(!back) errorString.push ("Выберите фон");
        if(time.length == 0) errorString.push ("Выберите время");

        if(hall && time.length != 0 && back){
            time.forEach(t => {
                const book = {
                    year: t.date.getFullYear(),
                    month: t.date.getMonth(),
                    day: t.date.getDate(),
                    time: t.time,
                    idHall: hall.id,
                    idBack: back.id,
                    idUser: Number(sessionStorage.getItem('IdUser')),
                    state: "рассматривается",
                    price: priceOneBooking(t),
                }

                fetch("http://localhost:8080/Booking/safeBooking", {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(book)
                })
                .then(data => data.text())
                .then(data => safeBookingLight(data))
                .then(()=>{console.log("Add Booking")})
                .catch((e)=> console.log(e.message));
            });
        }
        else alert(errorString.join("\n"));
    }

    function safeBookingLight(idBooking){
        let arrBookingLight = [];

        light.forEach(l => {
            arrBookingLight.push({idBooking: idBooking, idLight: l.id})
        })
        
        if(arrBookingLight.length != 0){
                fetch("http://localhost:8080/BookingLight/safeBookingLight", {
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(arrBookingLight)
                })
                .then(()=>{console.log("Add BookingLight")})
                .then(window.location.href = "/payment")
                .catch((e)=> console.log(e.message))
        }
    }

    return(
        <div className="price">
            {
                sessionStorage.getItem('user') == 'user' &&
                <>
                <div className="inTotal">
                    <p>Всего:</p>
                    <p>
                        {quantity === 0 && quantity + " заказов"}
                        {quantity === 1 && quantity + " заказ"}
                        {quantity === 5 && quantity + " заказов"}
                        {(quantity === 2 || quantity === 3 || quantity === 4) && quantity + " заказа"}

                    </p>
                </div>
                <div>
                    <p className="allPrise">{ollPrice()}р.</p>
                    <a href="#" onClick={booking}>Забронировать</a>
                </div>
                </>
            }
            {
                sessionStorage.getItem('user') != 'user' &&
                <div className="ifGuest">
                    <p>Чтобы оформить заказ вам нужно зарегистрироваться</p>
                </div>
            }
            
        </div>
    )
}

export default Price;