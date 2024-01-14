import AddLight from "./AddLight";
import EditLight from "./EditLight";
import { useContext, useState, useEffect  } from "react";
import { BlueContext } from "../../context/BlueContext";

function APLight(){
    const [activeAdd, setActiveAdd] = useState(false);
    const [activeEdit, setActiveEdit] = useState(false);
    const [activeLight, setActiveLight] = useState({});
    const setActiveBlue = useContext(BlueContext)
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

    const elLight = allLight.map((item)=> 
        { 
            let im;
            try {
                <img src={require("../../img/"+item.img)} />
                im = item.img;
            } catch (error) {
                im = "nullPhoto.png";
            }
            return <div className="elLightAP elAP" key = {item.id}>
            <img src={require("../../img/"+im)} />
            <p className="title">{item.title}</p>
            <p className="price">Стоимость аренды — {item.price} руб/сутки</p>
            <div className="buttons">
                <a href="" onClick={(e)=> edit(item, e)}>Редактировать</a>
                <a href="" onClick={(e)=> delet(item.id, e)}>Удалить</a>
            </div>
        </div>}
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
        setActiveEdit(true)
        setActiveBlue(true)
        setActiveLight(obj)
    }

    function delet(id, e){
        e.preventDefault();
        let c = window.confirm("Вы уверены что хотите удалить свет?")
        if(c){ 
            console.log("удаляем "+ id)
            fetch("http://localhost:8080/Light/deleteLight/"+id, {
                method: "DELETE",
                headers: {"Content-Type":"application/json"}
            })
            .then(()=>{console.log("delete Light")})
            .then(window.location.reload())
            .catch((e)=> console.log(e.message))
        }
    }

    return(
        <div className="apLight ap">
            <div>
                <h2>Свет</h2>
                <a href="" onClick={add}>Добавить новый</a>
            </div>

            <div className="tableLight table">
                {elLight}
            </div>

            {activeAdd && <AddLight setActiveAdd={setActiveAdd}/>}
            {activeEdit && <EditLight setActiveEdit={setActiveEdit} obj={activeLight}/>}
        </div>
    )
}

export default APLight;