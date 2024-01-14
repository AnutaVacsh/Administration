import { useState } from "react";

function ElBack({id, img, title, backColor, setActiveSpan, className, setColor, exam, activeSpan}){
    let option;
    let im;
    {
        try {
            <img src={require("../../img/"+img)} />
            im = img;
        } catch (error) {
            im = "nullPhoto.png";
        } 
    }

    if(className == "active"){
        option = backColor.map((item, index) => 
            <option value = {item.id} key = {index} >{item.color}</option>
        )
    }

    function clickHandler(){
        console.log(activeSpan, id)
        if(activeSpan == id) setActiveSpan(-1)
        else setActiveSpan(id)
        setColor([]);
    }

    return(
        <div className={"elBack " + className}>
            <img src={require("../../img/" + im)} alt='' onClick={clickHandler}/>
            <div>
                <p>{title}</p>
                
                <select name="backPaper" onClick={() => {setActiveSpan(id); exam()}} onChange = {e => {setColor([id, Number(e.target.value)])}} >
                    <option value=""></option>
                    {option}
                </select>
            </div>
        </div>
    )
}

export default ElBack;