import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './componenets/Card'

function App() {
  const [count, setCount] = useState(0)

  let Ojb = {
    username: "nashit",
    age: 21
  }
  
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-white p-4 rounded-xl'>Tailwind test</h1>
      <Card channel='youtube17'/>
      <Card channel='hello15'/>
    </>
  )
}

export default App
