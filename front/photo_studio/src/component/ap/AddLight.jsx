import { useContext } from "react";
import { BlueContext } from "../../context/BlueContext";

function AddLight({setActiveAdd}){
    const setActiveBlue = useContext(BlueContext);

    const newLight = {
        title: undefined,
        description: undefined,
        price: undefined,
        img: undefined,
        status: "есть"
    };

    function safe(){
        console.log(newLight)

        let strError = [];
        if(newLight.title === undefined) strError.push("Введите название");
        if(newLight.price === undefined) strError.push("Введите цену");

        if(strError.length === 0){
            setActiveAdd(false)
            setActiveBlue(false)

            fetch("http://localhost:8080/Light/safeLight", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(newLight)
            })
            .then(()=>{console.log("Add Light")})
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
                            <input type="text" name="title" onChange={(e) => newLight.title = e.target.value}/>
                        </div>
                        <div className="price">
                            <p>Цена</p>
                            <input type="number" min = {0} name="price" onChange={(e) => newLight.price = e.target.valueAsNumber}/>
                        </div>
                    </div>
                    <div className="addImg">
                        <p>Добавить изображение</p>
                        <input type="file" name="img"  onChange = {(e) => {
                                let f = e.target.value
                                let masAadres = f.split("\\")
                                newLight.img = masAadres.pop()
                            }}/>
                    </div>
                </div>
                <div className="description">
                    <p>Описание</p>
                    <textarea name="description" onChange={(e) => newLight.description = e.target.value}></textarea>
                </div>
                <div className="buttons">
                    <a href="#" onClick={safe}>Сохранить</a>
                    <a href="#" onClick={()=>{setActiveAdd(false); setActiveBlue(false)}}>Отмена</a>
                </div>

            </div>
        </div>
    )
}

export default AddLight;