import { useState } from "react";
import { useSelector } from "react-redux";

function SecondComponent() {
    let [firstName,setFirstName]=useState("Kishor")
    let counter = useSelector(gs=>gs.counter);
    let gname = useSelector(gs=>gs.gname);
    return(
        <div>
            <h2>2nd Component {firstName}</h2>
            <h2>Admin name is {gname}</h2>
            <h3>Counter is {counter}</h3>
        </div>
    )

}

export default SecondComponent;