import axios from "axios";
import { addProductFailure, addProductsStart, addProductSuccess, deleteProductFailure, deleteProductSuccess, fetchProductFailure, fetchProductsStart, fetchProductSuccess } from "../slice/productSlice";


let url = "http://localhost:3000/products";

// Asyn thunk for fetch products 
export const fetchProducts = ()=> async (dispatch)=>{
    //console.log(dispatch)
    //fetch(url).then(res=>res.json()).then(result=>console.log(result)).catch(error=>console.log(error))
    // axios.get(url).then(result=>console.log(result)).catch(error=console.log(error))
    dispatch(fetchProductsStart());
    try{
        const response = await axios.get(url);      // synch await keyword replace to then() function 
        //console.log(response)
    dispatch(fetchProductSuccess(response.data))
    }catch(error){
    console.log(error);
    dispatch(fetchProductFailure(error.message))
    }
}


// Asyn thunk for store products 
export const storeProducts = (product)=> async (dispatch)=>{
    console.log(product);
    dispatch(addProductsStart());
    try{
        const response = await axios.post(url,product)      // synch await keyword replace to then() function 
        //console.log(response)
    dispatch(addProductSuccess(response.data))
    }catch(error){
    console.log(error);
    dispatch(addProductFailure(error.message))
    }
}

// Asyn thunk for store products 
export const deleteProduct = (id)=> async (dispatch)=>{
    console.log(id);
    //dispatch(addProductsStart());
    try{
        const response = await axios.delete(`${url}/${id}`)      // synch await keyword replace to then() function 
        console.log(response)
    dispatch(deleteProductSuccess(response.data))
    }catch(error){
    console.log(error);
    dispatch(deleteProductFailure(error.message))
    }
}