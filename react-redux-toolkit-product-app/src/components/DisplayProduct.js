import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { storeOrders } from "../actions/ordersAction";
import PlaceOrders from "./PlaceOrders";
import DeleteProduct from "./DeleteProduct";

function DisplayProduct() {
let dispatch = useDispatch();
let products = useSelector(gs=>gs.products.productList);
let loading = useSelector(gs=>gs.products.loading)
let error = useSelector(gs=>gs.products.error)


    useEffect(()=> {
        dispatch(fetchProducts());
    },[dispatch])

    if(loading){
        return <h4>Loading......</h4>
    }
    if(error){
        return <h4>Error {error}</h4>
    }

    return(
        <>
        <h4>All Product Information</h4>
        {
            products.map((p,index)=> 
            <div key={index}>
                Id {p.id} Name {p.pname} Price {p.price}
                <DeleteProduct id={p.id}/>
               <PlaceOrders pname={p.pname}></PlaceOrders>
            </div>
            )
        }    
        </>
    )

}

export default DisplayProduct;