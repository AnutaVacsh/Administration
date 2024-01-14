import '../../css/apStyle.css';
import { Routes, Route, Link, Outlet} from 'react-router-dom';
import { useState } from 'react';
import { BlueContext } from '../../context/BlueContext';
import APLight from './APLight';
import APHall from './APHall';
import APBack from './APBack';

function AP(){
    const [activeLink, setActiveLink] = useState();
    const [activeBlue, setActiveBlue] = useState(false);

    return(
        <article>
            <nav>
                <Link to="/ap" className={activeLink === 1? "active": ""} onClick={() => setActiveLink(1)}>Залы</Link>
                <Link to="/ap/back" className={activeLink === 2? "active": ""} onClick={() => setActiveLink(2)}>Фотофоны</Link>
                <Link to="/ap/light" className={activeLink === 3? "active": ""} onClick={() => setActiveLink(3)}>Осветительное оборудование</Link>
                <Outlet/>
            </nav>
            <BlueContext.Provider value={setActiveBlue}>
            <Routes >
                    <Route path='/' element = {<APHall />}/>
                    <Route path='/back' element = {<APBack/>}/>
                    <Route path='/light' element = {<APLight />}/>
                    <Route path='*' element = {<p>СТРАНИЦА НЕ НАЙДЕНА</p>}/>
            </Routes>
            </BlueContext.Provider>
		{activeBlue && <div className="blue active"></div>}
        </article>
    )
}

export default AP;