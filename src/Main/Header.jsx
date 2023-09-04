import { BsSearch, BsCartCheck } from 'react-icons/bs'
import { AiOutlineShop } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = (props) => {

    const cartCount = useSelector(state => state.cart.length)

    return(
        <header>
            <div className="header-container" data-aos="fade-down" data-aos-duration="800">
                <li className='logo'> <Link to="/"> SNeak-O </Link> </li>
                <nav>
                    <li> <a href="#"> <BsSearch/> </a> </li>
                    <li> <Link to='/shop'> <AiOutlineShop/> </Link> </li>
                    <li className='shopping-cart' onClick={() => props.setToggleCart(prevState => !prevState)}> <BsCartCheck/> 
                    <span className='cart-count'>{cartCount}</span></li>
                </nav>
                
            </div>
        </header>
    )
}

export default Header;