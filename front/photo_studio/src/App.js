import Header from "./component/Header";
import Home from "./component/Home";
import Hall from "./component/Hall";
import Light from "./component/Light";
import Login from "./component/Login";
import Background from "./component/Background";
import Booking from "./component/booking/Booking";
import MyBooking from "./component/MyBooking";
import AP from "./component/ap/AP";
import APBooking from "./component/ap/APBooking";
import Thenks from "./component/Thenks";
import Registration from "./component/Registration";
import Payment from "./component/Payment";

import { Routes, Route} from 'react-router-dom';
import { UserContext } from "./context/UserComtext";
import { useState } from "react";


function App() {
  //сохранение статуса пользователя
  if(sessionStorage.getItem('user') == null) sessionStorage.setItem('user', 'guest');
  const [user, setUser] = useState(sessionStorage.getItem('user'));

  //сохранение id пользователя
  if(sessionStorage.getItem('IdUser') == null) sessionStorage.setItem('IdUser', '1');
  const [IdUser, setIdUser] = useState(sessionStorage.getItem('IdUser'));

  const setUserContext = (user, id) => {
    setUser(user);
    sessionStorage.setItem('user', user);

    setIdUser(id);
    sessionStorage.setItem('IdUser', id)
  }

  return(
    

    <>
      <UserContext.Provider value={{user, setUserContext}}>
        <Header user = {user}/>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/hall' element = {<Hall />}/>
          <Route path='/light' element = {<Light />}/>
          <Route path='/background' element = {<Background />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path="/registration" element = {<Registration />}/>
          <Route path="/myBooking" element = {(user == 'user' && <MyBooking/>) || (<p>СТРАНИЦА НЕДОСТУПНА</p>)}/>
          <Route path="/booking" element = {<Booking/>}/>
          <Route path="/payment" element = {(user == 'user' &&  <Payment/>) || (<p>СТРАНИЦА НЕДОСТУПНА</p>)}/>
          <Route path="/thenks" element = {(user == 'user' &&  <Thenks/>) || (<p>СТРАНИЦА НЕДОСТУПНА</p>)}/>
          {/* <Route path='/ap/booking' element = {<APBooking/>}/> */}
          <Route path="/ap/booking/*" element = {(user == 'admin' && <APBooking/>) || (<p>СТРАНИЦА НЕДОСТУПНА</p>)}/>
          <Route path="/ap/*" element = {(user == 'admin' && <AP/>) || (<p>СТРАНИЦА НЕДОСТУПНА</p>)}/>
          <Route path='*' element = {<p>СТРАНИЦА НЕ НАЙДЕНА</p>}/>
        </Routes>
      </UserContext.Provider>
     
    </>
  )
}

export default App;
