import { Link } from 'react-router-dom'
import '../css/homeStyle.css'
import img1 from '../img/home1.jpg'
import img2 from '../img/home2.png'
import img3 from '../img/home3.png'
import img4 from '../img/home4.png'
import img5 from '../img/home5.png'
import img6 from '../img/home6.png'
import img7 from '../img/home7.png'

function Home() {
    return(
        <article>
            <div className="action">
                <img src={img1} alt="постер"/>
                <div className="buttons">
                    <Link to ="/booking" className="bokingB">Забронировать студию</Link>
                    <Link to = '/hall' className="hallB">Посмотреть интерьер и цены</Link>
                    <Link to = '/light' className="lightB">Аренда света</Link>
                    <Link to ="/background" className="">Фотофоны</Link>
                    <a href="" className="backgroundB">Посмотреть адреса</a>
                </div>
            </div>
            <div className="inform">
                <h1>СТИЛЬНАЯ ФОТОСЕССИЯ В <br/>ФОТОСТУДИИ</h1>
                <h3>Интерьеры студий выполнены в стиле лофт, модерн, прованс, неоклассика, минимализм, где используется дорогая и качественная мебель. Уникальные предметы интерьера и световые элементы в сочетании с абсолютной мобильностью декораций придадут индивидуальный характер вашей фотосессии.</h3>
                <div className="photo">
                    <img src={img2} alt=''/>
                    <img src={img3} alt=''/>
                    <img src={img4} alt=''/>
                    <img src={img5} alt=''/>
                    <img src={img6} alt=''/>
                    <img src={img7} alt=''/>
                </div>
            </div>
        </article>
    )
}

export default Home;