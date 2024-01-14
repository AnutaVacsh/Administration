import { useContext, useState } from "react";
import { BlueContext } from "../../context/BlueContext";

function EditBack({obj, setActiveEdit, color}){
    const setActiveBlue = useContext(BlueContext);
    const [choiseColor, setChoiseColor] = useState(); // id
    const [freshColor, setFreshColor] = useState([]); //удалённые цвета id
    const [allNewColor, setAllNewColor] = useState([]); //добавленные цвета
    const [nowColor, setNowColor] = useState(color); // что сейчас показываем в списке
    const [newColor, setNewColor] = useState();
    console.log(freshColor) //удаляем эти цвета
    console.log(nowColor) //добавляем эти

    const freshBack = {
        title: obj.title,
        description: obj.description,
        price: obj.price,
        img: obj.img
    };

    function safe(){
        console.log(freshBack)

        let strError = [];
        if(freshBack.title === undefined) strError.push("Введите название");
        if(freshBack.price === undefined) strError.push("Введите цену");

        if(strError.length === 0){
            setActiveEdit(false)
            setActiveBlue(false)

            fetch("http://localhost:8080/Back/editBack/"+obj.id, {
                mode: 'cors',
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(freshBack)
            })
            .then(()=>{console.log("fresh Back")})
            // .then(window.location.reload())
            .catch((e)=> console.log(e.message))

            if(nowColor.length != 0){
                fetch("http://localhost:8080/BackColor/safeBackColor", {
                    mode: 'cors',
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(nowColor)
                })
                .then(()=>{console.log("add Color")})
                .then(window.location.reload())
                .catch((e)=> console.log(e.message))
            }

            if(freshColor.length != 0){
                fetch("http://localhost:8080/BackColor/deleteBackColor", {
                    method: "DELETE",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(freshColor)
                })
                .then(()=>{console.log("delete Color")})
                .then(window.location.reload())
                .catch((e)=> console.log(e.message))
            }
            
        }
        else alert(strError.join("\n"));

        // удалить все цвета из бд и добавить новые
        console.log("удалить цвета " + freshColor)
        console.log(allNewColor)
    }

    function deleteColor(e){
        e.preventDefault();
        if(choiseColor){
            console.log("удаляем "+choiseColor)
            let arr = freshColor
            arr.push(Number(choiseColor))
            console.log(arr)
            setFreshColor(arr);

            arr = nowColor.filter(i => i.id != choiseColor);
            console.log(arr)
            setNowColor(arr)
        } 
    }

    function addColor(e) {
        e.preventDefault();
        if(newColor){
            console.log("добавляем цвет "+newColor)

            let c;
            c = {idBack: obj.id, color: newColor, status: "есть"};
            console.log(c)

            let arr = allNewColor
            arr.push(c)
            setAllNewColor(arr)
            
            arr = nowColor;
            nowColor.push(c)
            setNowColor(arr)
        }

        
        // console.log(nowColor, nowColor.length)
        // // nowColor = undefined !!!!!!!!!!!!!!!!!!!!!!!!!!!
        // // если цвет первый ОШИБКА
        // if(nowColor.length != 0 || nowColor[0] != undefined) c = {id: nowColor.at(-1).id + 1, idBack: nowColor.at(-1).idBack, color: newColor, status: "есть"};
        // else {}
        // let arr = allNewColor
        // arr.push(c)
        // setAllNewColor(arr)
        // // console.log(c)

        // arr = nowColor;
        // nowColor.push(c)
        // setNowColor(arr)
    }

    return(
        <div className="add active">
            <h2>Добавить новый</h2>
            <div className="form">
                <div className="double">
                    <div className="left">
                        <div className="title">
                            <p>Название</p>
                            <input type="text" name="title" defaultValue={obj.title} onChange={(e)=> freshBack.title = e.target.value}/>
                        </div>
                        <div className="price">
                            <p>Цена в будни</p>
                            <input type="number" min = {0} name="price1" defaultValue={obj.price} onChange = {(e) => freshBack.price = e.target.valueAsNumber}/>
                        </div>
                    </div>
                    <div className="addImg">
                        <p>Добавить изображение</p>
                        <input type="file" name="img" onChange = {(e) => freshBack.img = e.target.value}/>
                    </div>
                </div>
                <div className="description">
                    <p>Описание</p>
                    <textarea name="description" defaultValue={obj.description} onChange = {(e) => freshBack.description = e.target.value}></textarea>
                </div>
                <div className="color">
                    <p>Цвета</p>
                    <div>
                        <div className="deleteColor">
                        <select name="colors" onChange={(e)=> setChoiseColor(e.target.value)}>
                            <option value=""></option>
                            {nowColor.map((item, index) => 
                                <option value = {item.id} key = {index}>{item.color}</option>
                            )}
                        </select>
                            <a href="#" onClick={deleteColor}>Удалить</a>
                        </div>
                        <div className="addColor">
                            <input type="text" name="color" onChange = {(e) => {setNewColor(e.target.value)}}/>
                            <a href="#" onClick={addColor}>Добавить</a>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <a href="#" onClick={safe}>Сохранить</a>
                    <a href="#" onClick={()=>{setActiveEdit(false); setActiveBlue(false)}}>Отмена</a>
                </div>
            </div>
        </div>
    )
}

export default EditBack;