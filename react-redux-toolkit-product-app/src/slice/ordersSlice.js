import {createSlice} from "@reduxjs/toolkit";
const ordersSlice = createSlice({
    name:"orders",
    initialState:{
        ordersList:[],
        loading:false,
        error:null
    },
    
    reducers:{
        fetchOrdersStart(state,action) {
            state.loading=true;
        },
        fetchOrdersSuccess(state,action){
            state.loading=false;
            state.ordersList=action.payload
        },
        fetchOrdersFailure(state,action){
            state.loading=false;
            state.error=action.payload
        },
        addOrdersStart(state,action) {
            state.loading=true;
        },
        addOrdersSuccess(state,action){
            state.loading=false;
            state.ordersList.push(action.payload)
        },
        addOrdersFailure(state,action){
            state.error=action.payload       
        }
    }
})
export const {
    fetchOrdersStart,
    fetchOrdersSuccess,
    fetchOrdersFailure,
    addOrdersStart,
    addOrdersSuccess,
    addOrdersFailure
}=ordersSlice.actions;

export default ordersSlice.reducer;
