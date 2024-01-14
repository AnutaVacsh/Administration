import { Link } from "react-router-dom";

function Thenks(){
    return(
        <article>
            <h1>Ваш заказ на рассмотрении</h1>
            <p>Деньги спишутся когда администратор подтвердит ваш заказ.<br/></p>
            <p>Спасибо что выбрали нас, ждём вас по адресу <br/>
                г.Саратов, проспект Строителей д.1к3А, ТЦ Атрио, центральный вход, 3-й этаж<br/>
                <br/>
                8-967-806-49-37
            </p>
            <Link to="/" className="thenksButton">На главную</Link>
        </article>
    )
}

export default Thenks;