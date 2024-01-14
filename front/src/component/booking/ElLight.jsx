import { useContext, useState } from "react";

function ElLight({id, img, title, className, setChoise}){
    const [activeSpan, setActiveSpan] = useState(0);
    let im;
    {
        try {
            <img src={require("../../img/"+img)} />
            im = img;
        } catch (error) {
            im = "nullPhoto.png";
        } 
    }

    function clickHandler(){
        activeSpan == 0 ? setActiveSpan(1) : setActiveSpan(0);
        setChoise(id)
    }

    return(
        <div className={"elLight " + className} onClick={clickHandler}>
            <img src={require('../../img/' + im)}/>
            <p>{title}</p>
        </div>
    )
}

export default ElLight;