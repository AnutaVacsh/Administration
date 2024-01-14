import { UserContext } from '../context/UserComtext'
import '../css/headerStyle.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

function Header(props){
    let {user} = useContext(UserContext);

    function goOut(){
        sessionStorage.setItem('user', 'guest');
        sessionStorage.setItem('IdUser', -1)
        window.location.href = "/";
    }

    return(
        <header>
            {user === 'guest' && (
                <div className = 'content'>
                    <Link to ="/login" className="buttonLogin">Войти</Link>
                    <Link to="/registration" className="buttonReg">Зарегистрироваться</Link>
                </div>
            )}
            {user === 'user' && (
                <div className = 'content'>
                    <p className='userName'>User</p>
                    <Link to = '/myBooking' className="buttonMyBooking">Мои брони</Link>
                    {/* <a href="MyBooking.html" className="buttonMyBooking">Мои брони</a> */}
                    <a href="#" className="buttonMyBooking" onClick={goOut}>Выйти</a>
                </div>
            )}
            {user === 'admin' && (
                <div className = 'content'>
                    <p className='userName'>Admin</p>
                    <Link to="/ap/booking">Брони</Link>
                    <a href="#" className="buttonMyBooking" onClick={goOut}>Выйти</a>
                </div>
            )}
        </header>
    )
}

export default Header