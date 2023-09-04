import { BsCartCheck } from 'react-icons/bs'
import { useContext } from "react";
import { ShopContext } from "./Shop";
import { addToCart } from '../store/store';
import { useDispatch } from 'react-redux';
import { AiFillStar } from "react-icons/ai";
import {BsFilterLeft} from 'react-icons/bs'
import { showNotification, hideNotification } from '../store/slices/notifSlice';



const ShopMain = (props) => {
    
    const dispatch = useDispatch();
    const { products, setProducts, currentProd, setCurrentProd, data } = useContext(ShopContext);

    const brandFilter = (brand) => {
        if(brand === 'All') {
            setProducts(data);
        } else {
            setProducts(data.filter(product => product.company === brand))
        }

        setCurrentProd(brand);
    }

    const notif = () => {
        dispatch(showNotification());

            setTimeout(() => {
                dispatch(hideNotification());
        }, 2000);
    }

 
    return(
        <section className='shop-main'>
                <h1> Recommended</h1>
                <div className="product-main-category">
                    <div onClick={() => brandFilter('All')} className={currentProd === 'All' ? 'selected-categ' : ''}>
                       <p> All Products </p>
                    </div>

                    <div onClick={() => brandFilter('Nike')} className={currentProd === 'Nike' ? 'selected-categ' : ''}>
                        <p> Nike </p>
                    </div>
    
                    <div onClick={() => brandFilter('Puma')} className={currentProd === 'Puma' ? 'selected-categ' : ''}> 
                        <p>Puma</p>
                    </div>

                    <div onClick={() => brandFilter('Vans')} className={currentProd === 'Vans' ? 'selected-categ' : ''}>
                        <p>Vans</p>
                    </div>

                    <div onClick={() => brandFilter('Womens')} className={currentProd === 'Womens' ? 'selected-categ' : ''}>
                        <p>Women's</p>
                    </div>
                </div>
                <div className="filter-burger" onClick={() => props.setToggleCategory(true)}>
                    <p>Filter by <span><BsFilterLeft/></span> </p>
                </div>
                <div className="product-cards">
                    {products.map((prod, ind ) => {
                        return <div className="product-card" key={ind}>
                            <div className="product-card-img">
                                <img src={prod.img} alt={`prod${ind}`}/>
                            </div>

                            <div className="product-card-details">
                                    <h1> {prod.title}</h1>
                                    <p><span> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </span>  {prod.reviews} </p>
                                    <div className="product-card-price">
                                        <p>{prod.priceDisplay}</p>
                                        <p className='product-card-cart' onClick={() => {dispatch(addToCart(prod)); notif()}}> <BsCartCheck/></p> 
                                    </div>
                            </div>
                        </div>
                    })}
                    
                </div>
            </section>
    )
}

export default ShopMain;