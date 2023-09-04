import '../Cart/cart.css'
import {BsTrash} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {removeToCart, addToCart, decreaseCartAmount} from '../store/store';


const Cart = (props) => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state) => state.cart);
    const shoppingCartCount = shoppingCart.length;

    let cartTotal = 0
    shoppingCart.forEach(cart => {
        cartTotal += cart.prevPrice;
    });

  

    return(
        <div className={`cart ${props.toggleCart ? 'cart-display' : ''}`}>
            <section className="cart-header">
                <h3>Your Cart <span>
                {
                shoppingCartCount > 1
                    ? `(${shoppingCartCount} items)`
                    : shoppingCartCount === 1
                    ? `(${shoppingCartCount} item)`
                    : '(no item)'
                }
                    </span> </h3>
                
                <div className="cart-close" onClick={() => props.setToggleCart(prev => !prev)}>
                    <h3>&times;</h3>
                </div>
            </section>

            <section className="product-carts">
                {
                    shoppingCart.map((cart, index) => {
                        return(
                            <div className="product" key={index}>
                                <div className="cart-img">
                                    <img src={cart.img} alt={`cart ${index}`}/>
                                </div>

                                <div className="cart-quantity">
                                    <h2>{cart.title}</h2>
                                    <p> {cart.company} </p>
                                    <div className="number-qty">
                                        <li onClick={() => dispatch(decreaseCartAmount(cart))}> - </li>
                                        <li> {cart.quantity} </li>
                                        <li onClick={() => dispatch(addToCart(cart))}> + </li>
                                    </div>
                                </div>

                                <div className="cart-price">
                                    <h2> {cart.prevPrice} </h2>
                                    <div className="remove-cart" onClick={() => dispatch(removeToCart(cart.title))}>
                                        <BsTrash/>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </section>

            <section className="footer-carts">
                <div className="subtotal">
                    <h3> SUBTOTAL </h3>
                    <div> <p> {cartTotal} </p> </div>
                </div>
                <div className="checkout">
                    <p>Taxes and Shipping Will Calculate at Shipping </p>

                    <div className="checkout-btn">
                        <button>Check Out </button>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Cart;