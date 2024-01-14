import { redirect, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserComtext'
import { useContext } from 'react';

function Registration(){
    let {setUserContext} = useContext(UserContext);

    const data = {
        login: "",
        password: "",
        password2: "",
        email: ""
    };

    function registr(e){
        e.preventDefault();
        
        let errorString = [];
        if(data.login.length == 0) errorString.push("Введите логин");
        if(data.password.length < 5) errorString.push("Папроль должен быть больше 5 символов");
        if(data.password != data.password2) errorString.push("Пароль не подтверждён");
        if(data.email.length == 0) errorString.push("Введите почту");

        if(errorString.length != 0) alert(errorString.join("\n"))
        else{
            const user = {
                login: data.login,
                password: data.password,
                email: data.email
            }

            fetch("http://localhost:8080/User/safeUser", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(user)
            })
            .then(data => data.text())
            .then(data => storage(data))
            .then(()=>{console.log("safe login")})
            .catch((e)=> console.log(e.message));
        }
    }

    function storage(id){
        if(id){
            setUserContext('user', id);
            window.location.href = "/";
        } 
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
                <div className="password">
                    <p>Подтверждение пароля</p>
                    <input type="text" name="password2" onChange={e => {data.password2 = e.target.value}}/>
                </div>
                <div className="email">
                    <p>E-mail</p>
                    <input type="email" name="email" onChange={e => {data.email = e.target.value}}/>
                </div>
                <div className="button">
                    <a href="" className="user" onClick={registr}>Зарегистрироваться</a>
                </div>
                <p>Забыли логин или пароль?</p>
            </div>
        </article>
    )
}

export default Registration;