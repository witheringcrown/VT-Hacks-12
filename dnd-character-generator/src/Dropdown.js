import React, { useState } from "react";

function Dropdown() {
    const [value, setValue] = useState("")
    const options = [
        {label: "Barbarian", value: 1},
        {label: "Bard", value: 2},
        {label: "Cleric", value: 3},
        {label: "Druid", value: 4},
        {label: "Fighter", value: 5},
        {label: "Monk", value: 6},
        {label: "Paladin", value: 7},
        {label: "Ranger", value: 8},
        {label: "Rogue", value: 9},
        {label: "Sorcerer", value: 10},
        {label: "Warlock", value: 11},
        {label: "Wizard", value: 12}
    ]

    function handleSelect(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <select className="form-select" onChange={handleSelect}>
                {options.map(option =>
                    <option value={option.value}>{option.label}</option>
                )}
            </select>
            <p>{value}</p>
        </div>
    )
}

export default Dropdown;