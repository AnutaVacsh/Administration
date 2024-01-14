import { useContext } from "react";
import { BlueContext } from "../../context/BlueContext";

function EditLight({obj, setActiveEdit}){
    const setActiveBlue = useContext(BlueContext);

    const freshLight = {
        title: obj.title,
        description: obj.description,
        price: obj.price,
        img: obj.img
    };

    function safe(){
        console.log(freshLight)

        let strError = [];
        if(freshLight.title === undefined) strError.push("Введите название");
        if(freshLight.price === undefined) strError.push("Введите цену");

        if(strError.length === 0){
            setActiveEdit(false)
            setActiveBlue(false)

            fetch("http://localhost:8080/Light/editLight/"+obj.id, {
                mode: 'cors',
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(freshLight)
            })
            .then(()=>{console.log("fresh Light")})
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
                            <input type="text" name="title" onChange={(e) => freshLight.title = e.target.value} defaultValue={obj.title}/>
                        </div>
                        <div className="price">
                            <p>Цена</p>
                            <input type="number" min = {0} name="price"  defaultValue={obj.price} onChange={(e) => freshLight.price = e.target.valueAsNumber}/>
                        </div>
                    </div>
                    <div className="addImg">
                        <p>Добавить изображение</p>
                        <input type="file" name="img"  onChange = {(e) => {
                                let f = e.target.value
                                let masAadres = f.split("\\")
                                freshLight.img = masAadres.pop()
                            }}/>
                    </div>
                </div>
                <div className="description">
                    <p>Описание</p>
                    <textarea name="description" onChange={(e) => freshLight.description = e.target.value}  defaultValue={obj.description}></textarea>
                </div>
                <div className="buttons">
                    <a href="#" onClick={safe}>Сохранить</a>
                    <a href="#" onClick={()=>{setActiveEdit(false); setActiveBlue(false)}}>Отмена</a>
                </div>

            </div>
        </div>
    )
}

export default EditLight;