import React from 'react';
import { withAuthInfo } from '@propelauth/react'
import Dropdown from './Dropdown';

const Class = withAuthInfo((props) => {
    return <div>
      <div className='headings'>Select Class</div>
      <Dropdown></Dropdown>
    </div>
})

export default Class;