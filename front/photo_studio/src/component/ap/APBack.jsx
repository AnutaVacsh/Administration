import { useContext, useState, useEffect } from "react";
import AddBack from "./AddBack";
import EditBack from "./EditBack";
import { BlueContext } from "../../context/BlueContext";

function APBack(){
    const [activeAdd, setActiveAdd] = useState(false);
    const setActiveBlue = useContext(BlueContext)
    const [activeEdit, setActiveEdit] = useState(false);
    const [activeBack, setActiveBack] = useState({});
    const [allBack, setBack] = useState([]);
    const [bacColor, setBacColor] = useState([]);
    console.log(bacColor)

    useEffect(() => {
        fetch("http://localhost:8080/Back/allBack", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setBack(data.filter(d => d.status == "есть")))
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
        .catch((e)=> console.log(e.message))
    }, [])

    const elBack = allBack.map((item)=> 
        {
            let im;
            try {
                <img src={require("../../img/"+item.img)} />
                im = item.img;
            } catch (error) {
                im = "nullPhoto.png";
            } 
            return <div className="elBackAP elAP" key = {item.id}>
                <img src={require("../../img/"+im)} />
                <p className="title">{item.title}</p>
                <p className="price">{item.price === 0?"бесплатно":"Стоимость аренды —"+item.price+" руб/сутки"}</p>
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
        setActiveBack(obj);
        setActiveEdit(true);
        setActiveBlue(true);
    }

    function delet(id, e){
        e.preventDefault();
        let c = window.confirm("Вы уверены что хотите удалить фон?")
        if(c){ 
            console.log("удаляем "+ id)

            fetch("http://localhost:8080/Back/deleteBack/"+id, {
                method: "DELETE",
                headers: {"Content-Type":"application/json"}
            })
            .then(()=>{console.log("delete Back")})
            .then(window.location.reload())
            .catch((e)=> console.log(e.message))
        }
    }

    return(
        <div className="apBack ap">
            <div>
                <h2>Фотофоны</h2>
                <a href="" onClick={add}>Добавить новый</a>
            </div>

            <div className="tableBack table">
                {elBack}
            </div>

            {activeAdd && <AddBack setActiveAdd={setActiveAdd}/>}
            {activeEdit && <EditBack setActiveEdit={setActiveEdit} obj={activeBack} color={bacColor.filter(i => i.idBack === activeBack.id)}/>}
        </div>
    )
}

export default APBack;