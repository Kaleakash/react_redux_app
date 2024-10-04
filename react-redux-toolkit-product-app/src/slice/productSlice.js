import {createSlice} from "@reduxjs/toolkit";


// const mySlice = createSlice({

// })

const productSlice = createSlice({
    name:"products",
    initialState:{
        productList:[],
        loading:false,
        error:null
    },
    
    reducers:{
        fetchProductsStart(state,action) {
            state.loading=true;
        },
        fetchProductSuccess(state,action){
            state.loading=false;
            state.productList=action.payload
        },
        fetchProductFailure(state,action){
            state.loading=false;
            state.error=action.payload
        },
        addProductsStart(state,action) {
            state.loading=true;
        },
        addProductSuccess(state,action){
            state.loading=false;
            state.productList.push(action.payload)
        },
        addProductFailure(state,action){
            state.error=action.payload       
        },
        deleteProductSuccess(state,action){
            state.loading=false;
            console.log(action.payload.id)
           state.productList=state.productList.filter(p=>p.id!=action.payload.id)
        },
        deleteProductFailure(state,action){
            state.error=action.payload       
        }
    }
})
export const {
    fetchProductsStart,
    fetchProductSuccess,
    fetchProductFailure,
    addProductsStart,
    addProductSuccess,
    addProductFailure,
    deleteProductSuccess,
    deleteProductFailure
}=productSlice.actions;

export default productSlice.reducer;
