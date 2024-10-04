import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice'
import ordersSlice from "./slice/ordersSlice";


const store = configureStore({
    reducer: {
        products:productSlice,
        orders:ordersSlice
    }
})

export default store;