import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let url = "http://localhost:3000/products";

// Async Thunk for fetching products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(url);
  console.log(response)
  return response.data;
});

// Async Thunk for adding a product
export const addProduct = createAsyncThunk('products/addProduct', async (productData) => {
  const response = await axios.post(url, productData);
  return response.data; // Assuming API returns the added product
});

export const hello = createAsyncThunk("hello",async()=> {

})
