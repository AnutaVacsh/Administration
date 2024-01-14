import { React, useContext } from "react";
import { BlueContext } from "../../context/BlueContext";

function AddHall({setActiveAdd}){
    const setActiveBlue = useContext(BlueContext);

    const newHall = {
        numberHall: undefined,
        title: undefined,
        description: undefined,
        priceDays: undefined,
        priceEnd: undefined,
        img: undefined,
        status: "есть"
    };

    function safe(){
        console.log(newHall)

        let strError = [];
        if(newHall.numberHall === undefined) strError.push("Введите номер зала");
        // if(newHall.title === undefined) strError.push("Введите название");
        if(newHall.priceDays === undefined) strError.push("Введите цену");
        if(newHall.priceEnd === undefined) strError.push("Введите цену в выходные");

        if(strError.length === 0){
            setActiveAdd(false)
            setActiveBlue(false)

            fetch("http://localhost:8080/Hall/safeHall", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newHall)
            })
            .then(()=>{console.log("Add Hall")})
            .then(window.location.reload())
            .catch((e)=> console.log(e.message))
        }

        else alert(strError.join("\n"));
    }

    return(
        <div className="add active">
            <h2>Добавить новый</h2>
            <div className="form">
                <div className="double">
                    <div className="left">
                        <div className = "number">
                            <p>Номер зала</p>
                            <input type="text" name="numberHall" onChange={(e)=> newHall.numberHall = e.target.value}/>
                        </div>
                        <div className="title">
                            <p>Название</p>
                            <input type="text" name="title" onChange={(e)=> newHall.title = e.target.value}/>
                        </div>
                        <div className="price">
                            <p>Цена в будни</p>
                            <input type="number" min = {0} name="price" onChange = {(e) => newHall.priceDays = e.target.valueAsNumber}/>
                        </div>
                        <div className="price2">
                            <p>Цена в выходные</p>
                            <input type="number" min = {0} name="price" onChange = {(e) => newHall.priceEnd = e.target.valueAsNumber}/>
                        </div>
                    </div>
                    <div className="addImg">
                        <p>Добавить изображение</p>
                        <input type="file" name="img"  onChange = {(e) => {
                                let f = e.target.value
                                let masAadres = f.split("\\")
                                newHall.img = masAadres.pop()
                            }}/>
                    </div>
                </div>
                <div className="description">
                    <p>Описание</p>
                    <textarea name="description" onChange = {(e) => newHall.description = e.target.value}></textarea>
                </div>
                <div className="buttons">
                    <a href="#" onClick={safe}>Сохранить</a>
                    <a href="#" onClick={()=>{setActiveAdd(false); setActiveBlue(false)}}>Отмена</a>
                </div>
            </div>
        </div>
    )
}

export default AddHall;