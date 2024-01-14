function HLB({id, numberHall, img, title, description, price1, price2}){
    let p;
    let im;
    {
        try {
            <img src={require("../img/"+img)} />
            im = img;
        } catch (error) {
            im = "nullPhoto.png";
        } 
    }
    
    if(price1 == 0 && price2 == undefined){
        p = <p><b>Бесплатно</b></p>
    }
    else if(price2 == undefined){
        p = <p>Стоимость аренды в студии — {price1} руб/час</p>
    }
    else{
        p = <p>Будни — {price1} руб/час Выходные — {price2} руб/час</p>
    }

    return(
        <div className="element">
            <img src={require("../img/"+ im)}/>
            <div className = 'inform'>
                {numberHall && <h2>{numberHall}</h2>}
                <h2>{title}</h2>
                <p>{description}</p>
				{p}
            </div>
        </div>
    )
}

export default HLB;