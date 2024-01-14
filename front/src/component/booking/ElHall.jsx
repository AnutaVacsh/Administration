import { useContext, useState } from "react";
import { BookingContext } from "../../context/BookingContext";

function ElHall({obj, id, img, numberHall, className, setActiveSpan, activeSpan}){
    let {setHall} = useContext(BookingContext)
    let im;
    {
        try {
            <img src={require("../../img/"+img)} />
            im = img;
        } catch (error) {
            im = "nullPhoto.png";
        } 
    }

    function clickHandler(){
        if(activeSpan == id){
           setActiveSpan(-1); 
           setHall();
        } 
        else{
            setActiveSpan(id)
            setHall(obj)
        } 
    }

    return(
        <div className={"elHall " + className} onClick={clickHandler}>
            <img src={require('../../img/' + im)}/>
            <p>{numberHall}</p>
        </div>
    )
}

export default ElHall;