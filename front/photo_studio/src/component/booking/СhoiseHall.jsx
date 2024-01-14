import { BookingContext } from "../../context/BookingContext";
import ElHall from "./ElHall"
import { useEffect, useState } from "react";

function ChoiseHall(){
    const [activeSpan, setActiveSpan] = useState(-1);
    const [hall, setHall] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/Hall/allHall", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setHall(data.filter(d => d.status == "есть")))
        .catch((e)=> console.log(e.message))
    }, [])

    const h = hall.map((item) => {
        return <ElHall key = {item.id} obj = {item} props = {item.id}{...item} className = {item.id == activeSpan? 'active': ''} 
        setActiveSpan = {setActiveSpan} activeSpan = {activeSpan}/>
    })
    return(
        <div>
            <h2>Выберите зал</h2>
            <div className="elementsHall">
                {h}
            </div>
        </div>
    )
}

export default ChoiseHall;