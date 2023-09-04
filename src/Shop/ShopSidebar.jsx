import { Link } from 'react-router-dom';
import {AiOutlineHome, AiOutlineClose} from 'react-icons/ai'
import { useContext } from 'react';
import { ShopContext } from './Shop';

const ShopSidebar = (props) => {
    const { selectedCategory, setSelectedCategory, selectedColor, setSelectedColor, selectedPriceRange, setSelectedPriceRange } = useContext(ShopContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'category') {
            setSelectedCategory(value);
        } else if (name === 'priceRange') { 
            setSelectedPriceRange(value);
        } else if (name === 'colors') {
            setSelectedColor(value);
        }
    }

    console.log(props.toggleCategory)

    return(
        <section className="shop-sidebar">
                <div className={`sidebar-container ${props.toggleCategory ? 'sidebar-container-active' : ''}`}>
                    <div className="shop-home">
                        <Link to="/"> <AiOutlineHome/> </Link> 
                    </div>

                    <div className="filtering">
                        <div className="filter category">
                            <label> Categories </label>

                            <div className='radio-btn'>
                                <div className="all">
                                    <input type="radio" value='all' name='category' onChange={handleChange} checked={selectedCategory === 'all'}/>
                                    <p>All</p>
                                </div>

                                <div className="sneakers">
                                    <input type="radio" value='sneakers' name='category' onChange={handleChange} checked={selectedCategory === 'sneakers'}/>
                                    <p>Sneakers</p>
                                </div>

                                <div className="flats">
                                    <input type="radio" value='flats' name='category' onChange={handleChange} checked={selectedCategory === 'flats'}/>
                                    <p>Flats</p>
                                </div>

                                <div className="sandals">
                                    <input type="radio" value='sandals' name='category' onChange={handleChange} checked={selectedCategory === 'sandals'}/>
                                    <p>Sandals</p>
                                </div>

                                <div className="heels">
                                    <input type="radio" value='heels' name='category' onChange={handleChange} checked={selectedCategory === 'heels'}/>
                                    <p>Heels</p>
                                </div>
                            </div>
                        </div>

                        <div className="filter price">
                            <label>Price</label>
                            <div className="radio-btn">
                                <div className="all">
                                <input
                                    type="radio"
                                    value="all"
                                    name="priceRange"
                                    onChange={handleChange}
                                    checked={selectedPriceRange === 'all'}
                                />
                                <p>All</p>
                                </div>
                                <div className="first-price">
                                <input
                                    type="radio"
                                    value="0-1000"
                                    name="priceRange"
                                    onChange={handleChange}
                                    checked={selectedPriceRange === '0-1000'}
                                />
                                <p>0-1,000</p>
                                </div>
                                <div className="second-price">
                                <input
                                    type="radio"
                                    value="1001-5000"
                                    name="priceRange"
                                    onChange={handleChange}
                                    checked={selectedPriceRange === '1001-5000'}
                                />
                                <p>1,001-5,000</p>
                                </div>
                                <div className="third-price">
                                <input
                                    type="radio"
                                    value="5001-10000"
                                    name="priceRange"
                                    onChange={handleChange}
                                    checked={selectedPriceRange === '5001-10000'}
                                />
                                <p>5,001-1,0000</p>
                                </div>
                                <div className="fourth-price">
                                <input
                                    type="radio"
                                    value="Over-10000"
                                    name="priceRange"
                                    onChange={handleChange}
                                    checked={selectedPriceRange === 'Over-10000'}
                                />
                                <p>Over 1,0000</p>
                                </div>
                            </div>
                        </div>

                        <div className="filter colors">
                            <label> Colors </label>

                            <div className='radio-btn'>
                                <div className="all">
                                    <input type="radio" value="all" name="colors" onChange={handleChange} checked={selectedColor === 'all'}/>
                                    <p>All</p>
                                </div>

                                <div className="black">
                                    <input type="radio" value="black" name="colors" onChange={handleChange} checked={selectedColor === 'black'}/>
                                    <p>Black</p>
                                </div>

                                <div className="blue">
                                    <input type="radio" value="blue" name="colors" onChange={handleChange} checked={selectedColor === 'blue'}/>
                                    <p>Blue</p>
                                </div>

                                <div className="red">
                                    <input type="radio" value="red" name="colors" onChange={handleChange} checked={selectedColor === 'red'}/>
                                    <p>Red</p>
                                </div>

                                <div className="green">
                                    <input type="radio" value="green" name="colors" onChange={handleChange} checked={selectedColor === 'green'}/>
                                    <p>Green</p>
                                </div>

                                <div className="white">
                                    <input type="radio" value="white" name="colors" onChange={handleChange} checked={selectedColor === 'white'}/>
                                    <p>White</p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='close-category-sidebar' onClick={() => props.setToggleCategory(false)}>
                        <AiOutlineClose/>
                    </div>
                    
                </div>
                
            </section>
    )
}

export default ShopSidebar;