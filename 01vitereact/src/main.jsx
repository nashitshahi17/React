import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App| By Nashit Shahi</h1>
    </div>
  )
}

// const domElement = {
//   type: 'a',
//   props : {
//     'href': 'https://www.google.com',             This wont work because it's customly designed and react won't be able to transpile it
//     'target': '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <div>
    <a href='https://www.google.com' target='_blank'>Visit google</a>
  </div>
)
const username = 'Nashit Shahi'
const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'Click me to visit google',
  username
)

createRoot(document.getElementById('root')).render(
  // <MyApp />
  // <App />
  // anotherElement
  reactElement
)
