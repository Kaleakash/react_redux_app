import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('products/fetchProducts/pending', (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase('products/fetchProducts/fulfilled', (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase('products/fetchProducts/rejected', (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase('products/addProduct/pending', (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase('products/addProduct/fulfilled', (state, action) => {
        state.loading = false;
        state.productList.push(action.payload);
      })
      .addCase('products/addProduct/rejected', (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
