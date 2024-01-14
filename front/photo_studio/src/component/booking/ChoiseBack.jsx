import ElBack from "./ElBack";
import { useState, useContext, useEffect } from "react";
import { BookingContext } from "../../context/BookingContext";

function ChoiseBack(){
    const [activeSpan, setActiveSpan] = useState(-1);
    const [color, setC] = useState([]);
    const {setBack} = useContext(BookingContext);
    const [back, setBac] = useState([]);
    const [bacColor, setBacColor] = useState([]);

    //полуаем фоны
    useEffect(() => {
        fetch("http://localhost:8080/Back/allBack", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setBac(data.filter(d => d.status == "есть")))
        .catch((e)=> console.log(e.message))
    }, [])

    //полуаем цвета
    useEffect(() => {
        fetch("http://localhost:8080/BackColor/allBackColor", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setBacColor(data.filter(d => d.status == "есть")))
        // .then(addColorToBack())
        .catch((e)=> console.log(e.message))
    }, [])

    function setColor(color){
        setC(color)
        setBack(bacColor.find(b => b.id === color[1]))
    }

    function exam(){
        if(color[0] != activeSpan){
            setColor([]);
        }
    }

    const elBack = back.map((item) =>
        {
            return <ElBack key = {item.id} props = {item.id}{...item} backColor = {bacColor.filter((item2) => item2.idBack === item.id)} className = {activeSpan == item.id? "active" : ""} 
            setActiveSpan = {setActiveSpan} setColor = {setColor} exam = {exam} activeSpan = {activeSpan}/>}
    )
    return(
        <div className="elementBack">
            {elBack}
        </div>
    )
}

export default ChoiseBack;