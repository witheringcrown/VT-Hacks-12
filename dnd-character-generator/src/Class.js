import React from 'react';
import { withAuthInfo } from '@propelauth/react'
import Dropdown from './Dropdown';

const Class = withAuthInfo((props) => {
    return <div>
      <h3>Select Class</h3>
      <Dropdown></Dropdown>
    </div>
})

export default Class;