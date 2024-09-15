import React from 'react';
import { withAuthInfo } from '@propelauth/react'
import LoggedIn from './LoggedIn';
import Header from "./Header.tsx"

const App = withAuthInfo((props) => {
    return <div>
      <Header></Header>
      <LoggedIn></LoggedIn>
    </div>
})

export default App;