import React from 'react';
import { withAuthInfo } from '@propelauth/react'
import Buttons from "./Buttons"

const Location = withAuthInfo((props) => {
    return <div>
      <div className='headings'>Location</div>
      <Buttons></Buttons>
    </div>
})

export default Location;