import React from 'react';
import { withAuthInfo } from '@propelauth/react'
import Class from "./Class.js"
import Location from './Location.js';

const Quiz = withAuthInfo((props) => {
  if (props.isLoggedIn) {
    return <div>
        <Class></Class>
        <Location></Location>
    </div>
    }
})

export default Quiz;