import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../actions/ordersAction";
import { useEffect } from "react";
function ViewOrders() {
    let dispatch = useDispatch();
    let orders = useSelector(gs=>gs.orders.ordersList);
    let loading = useSelector(gs=>gs.orders.loading)
    let error = useSelector(gs=>gs.orders.error)
        useEffect(()=> {
           // console.log("view orders useEffect")
            dispatch(fetchOrders());
        },[])
    
        if(loading){
            return <h4>Loading......</h4>
        }
        if(error){
            return <h4>Error {error}</h4>
        }
    
        return(
            <>
            <h4>All Orders Details</h4>
            {
                orders.map((o,index)=> 
                <div key={index}>
                    Order Id {o.id} PName {o.pname} Date {o.orderDate}
                </div>
                )
            }    
            </>
        )
}

export default ViewOrders;