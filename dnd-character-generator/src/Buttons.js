import React, { useState } from "react";
import City from "./City";
import State from "./State";

function Buttons() {
    const [value, setValue] = useState("")

    function Remote() {
        setValue(1);
    }

    function InPerson() {
        setValue(2);
    }

    if (value === 1){
        return (
            <div>
                <button onClick={Remote}>Remote</button>
                <button onClick={InPerson}>In-Person</button>
                <p>{value}</p>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={Remote}>Remote</button>
                <button onClick={InPerson}>In-Person</button>
                <p>{value}</p>
                <City></City>
                <State></State>
            </div>
        )
    }
    
}

export default Buttons;