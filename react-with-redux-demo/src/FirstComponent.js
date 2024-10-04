import { useState } from "react";
import { useSelector } from "react-redux";

function FirstComponent() {
let [firstName,setFirstName]=useState("Akash")
let gname = useSelector(gs=>gs.gname);
let counter = useSelector(gs=>gs.counter);
console.log(gname)

    return(
        <div>
            <h2>1st Component {firstName}</h2>
            <h2>Admin name is {gname}</h2>
            <h2>Couter is {counter}</h2>
        </div>
    )

}

export default FirstComponent;