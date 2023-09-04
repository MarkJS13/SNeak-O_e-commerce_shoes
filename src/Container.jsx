import Header from "./Main/Header";
import MainPage from "./MainPage";
import Cart from "./Cart/Cart";
import Shop from "./Shop/Shop";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SuccessNotif from '../src/Notif/SuccessNotif'

const Container = () => {
    const [toggleCart, setToggleCart] = useState(false);

    return(
        <main>
            <div className={`wrapper ${toggleCart ? 'wrapper-active' : ''}`} onClick={() => setToggleCart(prev => !prev)}></div>
            <Cart toggleCart={toggleCart} setToggleCart={setToggleCart}/>
           
            <SuccessNotif/>
            <Header setToggleCart={setToggleCart}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/shop" element={<Shop/>}/>
            </Routes>
        </main>

    )
} 

export default Container;