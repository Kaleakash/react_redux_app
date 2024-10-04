import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterChange() {
let [n,setN]=useState(0);
let [emp,setEmp]=useState({id:100,name:"Ravi",age:21})
let dispatch  = useDispatch();

let incrementValue  = ()=> {
    dispatch({type:"INCREMENT"});
}

let incrementDynamicValue  = ()=> {
    dispatch({type:"INCREMENT_DY",payload:n});
    setN(0);
}
let passObject= ()=> {
    dispatch({type:"OBJECT",payload:emp});
}
    return(
        <div>
            <h3>Counter Changes</h3>
            <input type="button" value="Increment" onClick={incrementValue}/>
            <br/>
            <input type="text" value={n} name="n" onChange={(event)=>setN(event.target.value)}/><br/>
            <input type="button" value="Increment" onClick={incrementDynamicValue}/>
            <br/>
            <input type="button" value="Pass Object" onClick={passObject}/>
        </div>
    )
}


export default CounterChange;