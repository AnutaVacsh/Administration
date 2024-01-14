import HLB from "./HLB";
import '../css/hallStyle.css'
import { useState, useEffect } from "react";

function Hall(){
    const [allHall, setHall] = useState([]);
    console.log(allHall)

    useEffect(() => {
        fetch("http://localhost:8080/Hall/allHall", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setHall(data.filter(d => d.status == "есть")))
        .catch((e)=> console.log(e.message))
    }, [])

    const h = allHall.map((item) => 
        <HLB key = {item.id} props = {item.id}{...item} price1={item.priceDays} price2={item.priceEnd}/>)

    return(
        <article>
            <h1>ВЫБЕРИТЕ ЗАЛ</h1>
            {h}
        </article>
    )
}

export default Hall;