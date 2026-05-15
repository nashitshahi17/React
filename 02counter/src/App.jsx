import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  // let counter = 5
  
  const addValue = () =>{
    console.log("Clicked")
    setCounter(counter+1)
  }
  
  const decrementValue = () =>{
    console.log("Clicked to Del")
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Hello React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button> 
    <br />
    <br />
    <button onClick={decrementValue}>Decrement Value</button>
    </>
  )
}

export default App