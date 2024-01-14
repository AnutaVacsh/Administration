import ElLight from "./ElLight";
import { BookingContext } from "../../context/BookingContext";
import { useEffect, useContext, useState } from "react";

function ChoiseLight(){
    const [activeSpan, setActiveSpan] = useState([]);
    const {setLight} = useContext(BookingContext);
    const [light, setLigh] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/Light/allLight", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setLigh(data.filter(d => d.status == "есть")))
        .catch((e)=> console.log(e.message))
    }, [])

    function setChoise(id){
        if (activeSpan[id] === 1) activeSpan[id] = 0;
        else  activeSpan[id] = 1;

        let copy = Object.assign([], activeSpan);
        console.log(copy)
        setActiveSpan(copy);
        parsToNormArr(copy)
        // setLight(copy)
    }
    function parsToNormArr(arr){
        const resArr = [];
        arr.map((item, index) => {
            if(item === 1) resArr.push(light.find(l => l.id === index));
        })
        console.log(resArr)

        setLight(resArr);
    }

    const h = light.map((item) => {
        return <ElLight key = {item.id} obj = {item} props = {item.id}{...item} className = {activeSpan[item.id] === 1? 'active': ''} setChoise = {setChoise}/>
    })
    return(
        <div className="elementLight">
            {h}
        </div>
    )
}

export default ChoiseLight;