import mastercard from '../assets/images/payment-method/mastercard.png'
import paypal from '../assets/images/payment-method/paypal.png'
import visa from '../assets/images/payment-method/visa.png'

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="store-name">
                    <h1>SNeak-O</h1>
                    <p>Specializes in providing high-quality, stylish <span>
                    shoes for your wardrobe.  </span>  </p>
                </div>

                <div className="quicklinks">
                    <div className='link'>
                        <h3> SHOP</h3>
                        <ul>
                            <li>All collections</li>
                            <li>Winter Edition</li>
                            <li>Discount</li>
                        </ul>

                    </div>

                    <div className='link'>
                        <h3>COMPANY</h3>
                        <ul>
                            <li>All collections</li>
                            <li>Winter Edition</li>
                            <li>Discount</li>
                        </ul>
                    </div>

                    <div className='link'>
                        <h3>SUPPORT</h3>
                        <ul>
                            <li>FAQ's</li>
                            <li>Cookie Policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
                </div>

                <div className="payment-methods">
                    <h3>PAYMENT METHODS</h3>
                    <ul>
                        <li> <img src={visa} alt="visa" /></li>
                        <li> <img src={mastercard} alt="mastercard" /> </li>
                        <li> <img src={paypal} alt="paypal" /> </li>
                    </ul>
                </div>
            </section>
            <div className="rights">
                <p> Built by Mark Joseph Serrano. All rights reserved 2023.</p>
            </div>
        </footer>
    )
}

export default Footer;