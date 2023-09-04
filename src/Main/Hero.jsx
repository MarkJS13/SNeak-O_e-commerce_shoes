import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Hero = () => {
    return(
        <div className="hero">
            <div className="slogan">
                <h1> Level up your styles with amazing shoes</h1>   
            </div>

            <div className="shop-now">
                <button> <Link to='/shop'>Shop Now <span> <AiOutlineArrowRight/> </span> </Link>  </button>
            </div>
            
        </div>
    )
}

export default Hero;