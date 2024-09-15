import React, { useState } from "react";

function State() {
    const [value, setValue] = useState("Enter State")

    function handleInput(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input onChange={handleInput} value = {value}></input>
        </div>
    )
}

export default State;