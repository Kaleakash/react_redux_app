import axios from "axios";
import { addOrdersFailure, addOrdersStart, addOrdersSuccess, fetchOrdersFailure, fetchOrdersStart, fetchOrdersSuccess } from "../slice/ordersSlice";
import { addProductFailure } from "../slice/productSlice";



let url = "http://localhost:3000/orders";

// Asyn thunk for fetch products 
export const fetchOrders = ()=> async (dispatch)=>{
    //console.log(dispatch)
    //fetch(url).then(res=>res.json()).then(result=>console.log(result)).catch(error=>console.log(error))
    // axios.get(url).then(result=>console.log(result)).catch(error=console.log(error))
    dispatch(fetchOrdersStart());
    try{
        const response = await axios.get(url);      // synch await keyword replace to then() function 
        //console.log(response)
    dispatch(fetchOrdersSuccess(response.data))
    }catch(error){
    console.log(error);
    dispatch(fetchOrdersFailure(error.message))
    }
}


// Asyn thunk for store products 
export const storeOrders = (order)=> async (dispatch)=>{
    console.log(order);
    dispatch(addOrdersStart());
    try{
        const response = await axios.post(url,order)      // synch await keyword replace to then() function 
        console.log(response)
    dispatch(addOrdersSuccess(response.data))
    }catch(error){
    console.log(error);
    dispatch(addOrdersFailure(error.message))
    }
}