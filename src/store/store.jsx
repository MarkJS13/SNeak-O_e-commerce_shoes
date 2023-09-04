import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import notifSlice from "./slices/notifSlice";

export const { addToCart, removeToCart, decreaseCartAmount } = cartSlice.actions;
export const store = configureStore({
    reducer: { // put all the slices here
        cart: cartSlice.reducer,
        notif: notifSlice.reducer
    }
})