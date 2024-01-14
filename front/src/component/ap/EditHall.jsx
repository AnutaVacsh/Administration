import { React, useContext } from "react";
import { BlueContext } from "../../context/BlueContext";

function EditHall({obj, setActiveEdit}){
    const setActiveBlue = useContext(BlueContext);

    const freshHall = {
        numberHall: obj.numberHall,
        title: obj.title,
        description: obj.description,
        priceDays: obj.priceDays,
        priceEnd: obj.priceEnd,
        img: obj.img
    };

    function safe(){
        console.log(freshHall)

        let strError = [];
        if(freshHall.numberHall === undefined) strError.push("Введите номер зала");
        // if(freshHall.title === undefined) strError.push("Введите название");
        if(freshHall.priceDays === undefined) strError.push("Введите цену");
        if(freshHall.priceEnd === undefined) strError.push("Введите цену в выходные");

        if(strError.length === 0){
            setActiveEdit(false)
            setActiveBlue(false)

            fetch("http://localhost:8080/Hall/editHall/"+obj.id, {
                mode: 'cors',
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(freshHall)
            })
            .then(()=>{console.log("fresh Hall")})
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
                            <input type="text" name="number" defaultValue={obj.numberHall} onChange={(e)=> freshHall.numberHall = e.target.value}/>
                        </div>
                        <div className="title">
                            <p>Название</p>
                            <input type="text" name="title" defaultValue={obj.title} onChange={(e)=> freshHall.title = e.target.value}/>
                        </div>
                        <div className="price">
                            <p>Цена в будни</p>
                            <input type="number" min = {0} name="price1" defaultValue={obj.priceDays} onChange = {(e) => freshHall.priceDays = e.target.valueAsNumber}/>
                        </div>
                        <div className="price2">
                            <p>Цена в выходные</p>
                            <input type="number" min = {0} name="price2" defaultValue={obj.priceEnd} onChange = {(e) => freshHall.priceEnd = e.target.valueAsNumber}/>
                        </div>
                    </div>
                    <div className="addImg">
                        <p>Добавить изображение</p>
                        <input type="file" name="img"  onChange = {(e) => {
                                let f = e.target.value
                                let masAadres = f.split("\\")
                                freshHall.img = masAadres.pop()
                                console.log(freshHall)
                            }}/>
                    </div>
                </div>
                <div className="description">
                    <p>Описание</p>
                    <textarea name="description" defaultValue={obj.description} onChange = {(e) => freshHall.description = e.target.value}></textarea>
                </div>
                <div className="buttons">
                    <a href="#" onClick={safe}>Сохранить</a>
                    <a href="#" onClick={()=>{setActiveEdit(false); setActiveBlue(false)}}>Отмена</a>
                </div>
            </div>
        </div>
    )
}

export default EditHall;