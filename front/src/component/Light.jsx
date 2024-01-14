import HLB from "./HLB";
import '../css/hallStyle.css'
import { useState, useEffect } from "react";

function Light(){
    const [allLight, setLight] = useState([]);
    console.log(allLight)

    useEffect(() => {
        fetch("http://localhost:8080/Light/allLight", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setLight(data.filter(d => d.status == "есть")))
        .catch((e)=> console.log(e.message))
    }, [])

    // let arrLight = [{id: 1,
    //     img: 'lightLazer.png',
    //     title: 'Лазер',
    //     description: 'Рекомендуем использовать в комплекте с дым машиной в зале ',
    //     price1: 300}];

    const h = allLight.map((item) => 
        <HLB key = {item.id} props = {item.id}{...item} price1={item.price}/>)
        
    return(
        <article>
            <h1>АРЕНДА ОСВЕТИТЕЛЬНОГО ОБОРУДОВАНИЯ</h1>
            {h}
        </article>
    )
}

export default Light;