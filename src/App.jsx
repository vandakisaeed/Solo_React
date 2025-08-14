import { useState } from 'react'
import './App.css'
import { Habit } from './Components/Habit'
import { LocalStorage } from './Components/LocalStorage'

function App() {
  return ( 
    <>
    <h2 className='text-3xl font-bold underline'>Habit organisation </h2>
      <Habit/>
      <LocalStorage/>
    </>
  )
}

export default App
