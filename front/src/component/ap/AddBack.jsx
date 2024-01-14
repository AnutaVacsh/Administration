import { useContext } from "react";
import { BlueContext } from "../../context/BlueContext";

function AddBack({setActiveAdd}){
    const setActiveBlue = useContext(BlueContext);

    const newBack = {
        title: undefined,
        description: undefined,
        price: undefined,
        img: undefined,
        status: "есть"
    };

    function safe(){
        console.log(newBack)

        let strError = [];
        if(newBack.title === undefined) strError.push("Введите название");
        if(newBack.price === undefined) strError.push("Введите цену");

        if(strError.length === 0){
            setActiveAdd(false)
            setActiveBlue(false)

            fetch("http://localhost:8080/Back/safeBack", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newBack)
            })
            .then(()=>{console.log("Add Back")})
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
                        <div className="title">
                            <p>Название</p>
                            <input type="text" name="title" onChange={(e)=> newBack.title = e.target.value}/>
                        </div>
                        <div className="price">
                            <p>Цена в будни</p>
                            <input type="number" min = {0} name="price" onChange = {(e) => newBack.price = e.target.valueAsNumber}/>
                        </div>
                    </div>
                    <div className="addImg">
                        <p>Добавить изображение</p>
                        <input type="file" name="img"  onChange = {(e) => {
                                let f = e.target.value
                                let masAadres = f.split("\\")
                                newBack.img = masAadres.pop()
                            }}/>
                    </div>
                </div>
                <div className="description">
                    <p>Описание</p>
                    <textarea name="description" onChange = {(e) => newBack.description = e.target.value}></textarea>
                </div>
                <div className="buttons">
                    <a href="#" onClick={safe}>Сохранить</a>
                    <a href="#" onClick={()=>{setActiveAdd(false); setActiveBlue(false)}}>Отмена</a>
                </div>
            </div>
        </div>
    )
}

export default AddBack;