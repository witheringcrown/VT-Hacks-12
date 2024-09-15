import React from 'react';
import { withAuthInfo } from '@propelauth/react'

const Class = withAuthInfo((props) => {
    return <div>
      <h3>select class</h3>
    </div>
})

export default Class;