import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/data'

const cartSlice = createSlice({
    name: "cart", //like state name
    initialState: [], //initial state
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            const existingProduct = state.find(product => product.id === id);
            const origPrice = data.find(product => product.id === id);

            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.prevPrice += origPrice.prevPrice;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }

        },
        removeToCart: (state, action) => {
            return state.filter(cart => {
                return cart.title !== action.payload;
            })
        },
        decreaseCartAmount: (state, action) => {
            const { id } = action.payload;
            const existingProduct = state.find(product => product.id === id);
            const origPrice = data.find(product => product.id === existingProduct.id);
          
            if (existingProduct && existingProduct.quantity > 1) {
              existingProduct.quantity -= 1;
              existingProduct.prevPrice -= origPrice.prevPrice;
            } else {
                return state.filter(product => product.id !== id);
            } 
        },
    }


});

export default cartSlice;