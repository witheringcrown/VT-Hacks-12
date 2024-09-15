import React, { useState } from "react";

function City() {
    const [value, setValue] = useState("Enter City")

    function handleInput(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input onChange={handleInput} value = {value}></input>
        </div>
    )
}

export default City;