import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../actions/productActions";

function AddProduct() {
let [pname,setPname]=useState("");
let [price,setPrice]=useState("");
let dispatch = useDispatch();
let error  = useSelector(gs=>gs.products.error)
let handleSubmit = (event)=> {
    event.preventDefault();
    let product = {pname,price};
    console.log(product);
    dispatch(storeProducts(product));
    setPname("")
    setPrice("");
}
   return(
        <>
        <span style={{"color":"red"}}>{error}</span>
        <h4>Add Product</h4>
        <form onSubmit={handleSubmit}>
        <label>PName</label>
        <input type="text" name="pname" value={pname}  onChange={(event)=>setPname(event.target.value)}/><br/>
        <label>Price</label>
        <input type="text" name="price" value={price}  onChange={(event)=>setPrice(event.target.value)}/><br/>
        <input type="submit" value="Add Product"/>
        <input type="reset" value="reset"/>
        </form>
        </>
    )
}

export default AddProduct;