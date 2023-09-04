import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaChild, FaMale, FaFemale, FaShoePrints } from 'react-icons/fa'
import { BsCartCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/store'
import { showNotification, hideNotification } from '../store/slices/notifSlice';


const Featured = () => {
    const dispatch = useDispatch();

    const featuredShoes = [
        {
            id: 10,
            quantity: 0,
            img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
            title: "Pacer Future Sneaker",
            reviews: "(123 reviews)",
            prevPrice: 1400,
            priceDisplay: '1,400',
            company: "Puma",
            color: "red",
            category: "sneakers",
        },
        {
            id: 13,
            quantity: 0,
            img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
            title: "Pacer Future Doubleknit",
            reviews: "(123 reviews)",
            prevPrice: 14000,
            priceDisplay: '14,000',
            company: "Puma",
            color: "black",
            category: "sneakers",
        },
        {
            id: 7,
            quantity: 0,
            img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
            title: "Nike Zoom Freak",
            reviews: "(123 reviews)",
            prevPrice: 14000,
            priceDisplay: '14,000',
            company: "Nike",
            color: "green",
            category: "sneakers",
        },
    ];

    const notif = () => {
        dispatch(showNotification());

            setTimeout(() => {
                dispatch(hideNotification());
        }, 2000);
    }

    return (
        <section className="featured">
            <div className="currated">
                <h1>Currated picks</h1>

                <div className="currated-tiles">
                    <div className="tile kids">
                        <h3> <FaChild/> </h3>
                        <button>  Shop Kids <span> <AiOutlineArrowRight/> </span> </button>
                    </div>

                    <div className="tile men">
                        <h3> <FaMale/> </h3>
                        <button> Shop Men <span> <AiOutlineArrowRight/> </span> </button>
                    </div>

                    <div className="tile women"> 
                        <h3> <FaFemale/> </h3>
                        <button> Shop Women <span> <AiOutlineArrowRight/> </span> </button>
                    </div>

                    <div className="tile casual">
                        <h3> <FaShoePrints/> </h3>
                        <button> Shop Casual <span> <AiOutlineArrowRight/> </span> </button>
                    </div>
                </div>
            </div>

            <div className="featured-products">
                <h1>Featured Products</h1>
                <div className="products">
                {featuredShoes.map((prod, index) => {
                return <div className="product" key={index}>
                            <div className="product-img" data-aos="flip-left" data-aos-duration="800">
                                <img src={prod.img} alt="" />
                            </div>
                            <div className="product-details">
                                <div>
                                    <h2 className="product-name"> {prod.title} </h2>
                                    <p className="price"> {prod.priceDisplay} </p>
                                </div>
                                <div className="prod-cart" onClick={() => {dispatch(addToCart(prod)), notif()}}>
                                    <BsCartCheck/>
                                </div>
                            </div>
                        </div>
                })}
                </div>
            </div>    
        </section>
    )
}

export default Featured;