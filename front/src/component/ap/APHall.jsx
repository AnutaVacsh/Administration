import { useContext, useState, useEffect  } from "react";
import AddHall from "./AddHall";
import EditHall from "./EditHall";
import { BlueContext } from "../../context/BlueContext";

function APHall(){
    const [activeAdd, setActiveAdd] = useState(false);
    const setActiveBlue = useContext(BlueContext)
    const [activeEdit, setActiveEdit] = useState(false);
    const [activeHall, setActiveHall] = useState({});
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

    const elHall = allHall.map((item)=> 
        {
            let im;
            try {
                <img src={require("../../img/"+item.img)} />
                im = item.img;
            } catch (error) {
                im = "nullPhoto.png";
            }
            return <div className="elHallAP elAP" key = {item.id}>
                <img src={require("../../img/"+im)} />
            <p className="title">{item.numberHall}</p>
            <p className="price">Будни — {item.priceDays} руб/час Выходные — {item.priceEnd} руб/час</p>
            <div className="buttons">
                <a href="" onClick={(e)=> edit(item, e)}>Редактировать</a>
                <a href="" onClick={(e)=> delet(item.id, e)}>Удалить</a>
            </div>
        </div>
        }
    )

    function add(e){
        e.preventDefault();
        console.log("добавляем ")
        setActiveAdd(true)
        setActiveBlue(true)
    }

    function edit(obj, e){
        e.preventDefault();
        console.log("редактируем "+ obj.id)
        setActiveHall(obj);
        setActiveEdit(true);
        setActiveBlue(true);
    }

    function delet(id, e){
        e.preventDefault();
        let c = window.confirm("Вы уверены что хотите удалить зал?")
        if(c){
            console.log("удаляем "+ id)

            fetch("http://localhost:8080/Hall/deleteHall/"+id, {
                method: "DELETE",
                headers: {"Content-Type":"application/json"}
            })
            .then(()=>{console.log("delete Hall")})
            .then(window.location.reload())
            .catch((e)=> console.log(e.message))
        } 
    }

    return(
        <div className="apHall ap">
            <div>
                <h2>Залы</h2>
                <a href="" onClick={add}>Добавить новый</a>
            </div>

            <div className="tableHall table">
                {elHall}
            </div>

            {activeAdd && <AddHall setActiveAdd={setActiveAdd}/>}
            {activeEdit && <EditHall setActiveEdit={setActiveEdit} obj={activeHall}/>}
        </div>
    )
}

export default APHall;