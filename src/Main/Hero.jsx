import { AiOutlineArrowRight } from 'react-icons/ai'

const Hero = () => {
    return(
        <div className="hero" data-aos="fade-down" data-aos-duration="800">
            <div className="slogan">
                <h1> Level up your styles with amazing shoes</h1>   
            </div>

            <div className="shop-now">
                <button> <a href=""> Shop Now <span> <AiOutlineArrowRight/> </span> </a>  </button>
            </div>
            
        </div>
    )
}

export default Hero;