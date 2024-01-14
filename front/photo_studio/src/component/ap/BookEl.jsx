import { useState, useEffect } from "react";

function BookEl({list}){
    const [listUser, setListUser] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/User/allUser", {
            mode: 'cors',
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => setListUser(data))
        .catch((e)=> console.log(e.message))
    }, [])
    
    const tr = list.map((item)=>
        <tr key = {item.id}>
            <td>
                <ul type = 'none'>
                    <li>{listUser.filter((u) => u.id == item.idUser)[0].login}</li>
                    <li>{listUser.filter((u) => u.id == item.idUser)[0].email}</li>
                </ul>
            </td>
            <td>{item.date}</td>
            <td>{item.time}:00 - {item.time+1}:00</td>
            <td>{item.number}</td>
            <td>
                <ul type = 'none'>
                    {item.light.map((i, n)=> <li key = {n}>{i.title}</li>)}
                    {item.back && <li>{item.back}</li>}
                </ul>
            </td>
            <td>{item.price} руб.</td>
            <td className={"colorState "+colorState(item.state)}>{item.state}</td>
            {item.state === "рассматривается" &&
            <td className="bookButtons">
                <a href="#" onClick={()=>confirmation(item.id)}>Подтвердить</a>
                <a href="#" onClick={()=>deviation(item.id)}>Отклонить</a>
            </td>
            }
        </tr>
    )

    function colorState(str){
        if(str === "рассматривается") return "p";
        if(str === "подтверждён") return "b";
        if(str === "отклонён") return "r";
        else return "";
    }

    //подтверждение
    function confirmation(id){
        console.log("подтверждение "+ id)

        fetch("http://localhost:8080/Booking/editState/"+id, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: "подтверждён"
        })
        .then(()=>{console.log("edit state")})
        .then(window.location.reload())
        .catch((e)=> console.log(e.message));

        payment();    
    }

    // оплата
    function payment(){
        alert("В это момент должна проходить оплата");
    }

    //отклонение
    function deviation(id){
        console.log("отклонение "+ id)

        fetch("http://localhost:8080/Booking/editState/"+id, {
                    method: "PUT",
                    headers: {"Content-Type":"application/json"},
                    body: "отклонён"
                })
                .then(()=>{console.log("edit state")})
                .then(window.location.reload())
                .catch((e)=> console.log(e.message));
    }

    return(
        <table className="listBook">
			<thead>
		        <tr>
                    <th>клиент</th>
		            <th>дата</th>
					<th>время</th>
					<th>зал</th>
					<th>дополнительные<br/>брони</th>
					<th>стоимость</th>
		            <th>статус</th>
                    <th>действия</th>
		        </tr>
		    </thead>
		    <tbody>
		        {tr}
		    </tbody>
		</table>
    )
}

export default BookEl;