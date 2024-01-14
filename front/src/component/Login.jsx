import { redirect, useNavigate } from 'react-router-dom';
import '../css/loginStyle.css'
import { UserContext } from '../context/UserComtext'
import { useContext } from 'react';

function Login(){
    let {setUserContext} = useContext(UserContext);
    // const novigate = useNavigate();

    const data = {
        login: "",
        password: ""
    };

    function checkLoginUser(e){
        e.preventDefault();
        console.log(data.login + " " + data.password);
        let check; //либо id либо -1

        if(data.login && data.password)
        fetch("http://localhost:8080/User/checkUser/"+data.login+"/"+data.password, {
            mode: 'cors',
            method: "GET",
            headers: {"Content-Type":"application/json"}
        })
        .then(data => data.text())
        .then(data => c(data))
        .then(()=>{console.log("check login")})
        .catch((e)=> console.log(e.message));

        else alert("Введите логин и пароль")
    }

    function c(check){
        if(check && check != -1){
            console.log("+")
            setUserContext('user', check);
            window.location.href = "/";
        }
        else alert("Неправильный логин или пароль");
    }

    function checkLoginAdmin(e){
        e.preventDefault();
        console.log(data.login + " " + data.password);
        let check; //либо 0 либо 1

        if(data.login && data.password)
        fetch("http://localhost:8080/UserAdmin/checkAdmin/"+data.login+"/"+data.password, {
            method: "GET",
            headers: {"Content-Type":"application/json"}
        })
        .then(data => data.text())
        .then(data => ca(data))
        .then(()=>{console.log("check loginAdmin")})
        .catch((e)=> console.log(e.message));

        else alert("Введите логин и пароль")
    }

    function ca(check){
        if(check == 1){
            console.log("+")
            setUserContext('admin', -1);
            window.location.href = "/ap";
        }
        else alert("Неправильный логин или пароль");
    }

    return(
        <article>
            <h1>Войти</h1>
            <div className="error">

            </div>
            <div className="form">
                <div className="login">
                    <p>Логин</p>
                    <input type="text" name="login" onChange={e => {data.login = e.target.value}}/>
                </div>
                <div className="password">
                    <p>Пароль</p>
                    <input type="text" name="password" onChange={e => {data.password = e.target.value}}/>
                </div>
                <div className="button">
                    <a href="" className="user" onClick={checkLoginUser}>Войти</a>
                    <a href="" className="admin" onClick={checkLoginAdmin}>Войти как администратор</a>
                </div>
                <p>Забыли логин или пароль?</p>
            </div>
        </article>
    )
}

export default Login;