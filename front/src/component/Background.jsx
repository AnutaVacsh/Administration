import HLB from "./HLB";
import '../css/hallStyle.css'
import {useState, useEffect} from 'react'

function Background(){
    const [allBack, setBack] = useState([]);
    console.log(allBack)

    useEffect(() => {
        fetch("http://localhost:8080/Back/allBack", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setBack(data.filter(d => d.status == "есть")))
        .catch((e)=> console.log(e.message))
    }, [])

    // let arrBack = [{id: 1,
    //     img: 'backgroundCloth.png',
    //     title: 'Бумажные фоны',
    //     description: 'Широкий выбор цветных бумажных фонов для рекламных и персональный фотосессий ' +
    //     'Цветные бумажные фоны резервируются заранее при бронировании студии и предоставляются'}];

    const h = allBack.map((item) => 
        <HLB key={item.id} props = {item.id}{...item} price1 = {item.price}/>)
        
    return(
        <article>
            <h1>ФОТОФОНЫ</h1>
            {h}
        </article>
    )
}

export default Background;