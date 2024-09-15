import React from 'react';
import { withAuthInfo } from '@propelauth/react'
import Class from "./Class.js"
import Dropdown from './Dropdown.js';

const Quiz = withAuthInfo((props) => {
  if (props.isLoggedIn) {
    return <div>
        <Class></Class>
        <Dropdown></Dropdown>
    </div>
    }
})

export default Quiz;