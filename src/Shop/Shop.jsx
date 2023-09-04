
import data from '../data/data.jsx'
import '../Shop/shop.css'
import { useEffect, useState, createContext } from 'react';
import ShopSidebar from './ShopSidebar.jsx';
import ShopMain from './ShopMain.jsx';

export const ShopContext = createContext()

const Shop = () => {
    const [toggleCategory, setToggleCategory] = useState(false);
    const [products, setProducts] = useState(data);
    const [currentProd, setCurrentProd] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedColor, setSelectedColor] = useState('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState('All');


    useEffect(() => {
        const filteredProducts = data.filter((product) => {
          const brandMatch = currentProd === 'All' || product.company === currentProd;
          const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
          const colorMatch = selectedColor === 'all' || product.color === selectedColor;
          const priceRangeMatch =
            selectedPriceRange === 'all' ||
            (selectedPriceRange === '0-1000' && product.prevPrice <= 1000) ||
            (selectedPriceRange === '1001-5000' && product.prevPrice > 1000 && product.prevPrice <= 5000) ||
            (selectedPriceRange === '5001-10000' && product.prevPrice > 5000 && product.prevPrice <= 10000) ||
            (selectedPriceRange === 'Over-10000' && product.prevPrice > 10000);
      
          return categoryMatch && brandMatch && priceRangeMatch && colorMatch;
        })
        setProducts(filteredProducts);
    }, [selectedCategory, currentProd, selectedPriceRange, selectedColor]);

    useEffect(() => {
    setProducts(data);
    setSelectedCategory('all');
    setCurrentProd('All');
    setSelectedPriceRange('all')
    setSelectedColor('all');
    }, []);



    const handleResize = () => {
      if (window.innerWidth < 680) {
        setToggleCategory(false);
      } else {
        setToggleCategory(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return(
        <ShopContext.Provider value={{ products, setProducts, currentProd, setCurrentProd, selectedCategory, setSelectedCategory, selectedColor, setSelectedColor, selectedPriceRange, setSelectedPriceRange, data }}>
            <div className="shop">
                <ShopSidebar toggleCategory={toggleCategory} setToggleCategory={setToggleCategory}/>
                <ShopMain setToggleCategory={setToggleCategory}/>
            </div>
        </ShopContext.Provider>
    )
}

export default Shop;