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
            <div className="buttonGroup">
                <button onClick={Remote} className="selected">Remote</button>
                &nbsp;
                &nbsp;
                <button onClick={InPerson}>In-Person</button>
            </div>
        )
    } else {
        return (
            <div className="buttonGroup">
                <button onClick={Remote}>Remote</button>
                &nbsp;
                &nbsp;
                <button onClick={InPerson} className="selected">In-Person</button>
                <div className="textBoxes">
                    <City></City>
                    <State></State>
                </div>
            </div>
        )
    }
    
}

export default Buttons;