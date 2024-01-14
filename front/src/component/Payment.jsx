import cards from '../img/icons/casds.png'
import { Link } from 'react-router-dom';

function Payment(){
    return(
        <div className="form">
            <p className="price3">{sessionStorage.getItem('price') + "₽"}</p>

            <div className='f'>
                <div className="cardNumber">
                    <input type="text" name="cardNumber" placeholder="card number"/>
                </div>
                <div className="cardNumber">
                    <input className='yy' type="text" name="year" placeholder="MM/YY"/>
                    <input className='cvv' type="text" name="cvv" placeholder="cvv"/>
                </div>
                <div className="phoneNumber">
                    <input type="text" name="phoneNumber" placeholder="phone number"/>
                </div>
            </div>
            
            <img src={cards} alt="cardsIcons" />

            <div className='button buttonPay'>
                <Link to="/thenks" className="user">Pay</Link>
            </div>
        </div>
    )
}

export default Payment;