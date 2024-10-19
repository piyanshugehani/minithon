import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {

  return (
    <>
      <div className='bg-green-500 flex justify-between'>
        Hello
        <User/></div> 
    </>
  )
}

export default App
