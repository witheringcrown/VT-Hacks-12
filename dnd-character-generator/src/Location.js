import React from 'react';
import { withAuthInfo } from '@propelauth/react'
import Buttons from "./Buttons"

const Location = withAuthInfo((props) => {
    return <div>
      <h3>Location</h3>
      <Buttons></Buttons>
    </div>
})

export default Location;