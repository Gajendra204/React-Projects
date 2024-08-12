import { useState } from 'react'
import './App.css'
import UserContextprovider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextprovider>
      <h1>React with Gajendra</h1>
      <Login/>
      <Profile/>

    </UserContextprovider >
  )
}

export default App
