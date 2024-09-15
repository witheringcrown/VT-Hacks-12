import React, { useState } from "react";
import TextEnter from "./TextEnter";

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
                <TextEnter></TextEnter>
            </div>
        )
    }
    
}

export default Buttons;