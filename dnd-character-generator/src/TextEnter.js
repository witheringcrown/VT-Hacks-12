import React, { useState } from "react";

function TextEnter() {
    const [value, setValue] = useState("Enter City")

    function handleInput(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input onChange={handleInput} value = {value}></input>
            <p>{value}</p>
        </div>
    )
}

export default TextEnter;