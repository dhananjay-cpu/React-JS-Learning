import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './demo.jsx'

function MyApp(){
  return (
    <div>
      <h1>This is MyApp!</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit Google"
// }

const reactElement = React.createElement(
  'a', 
  { href: "https://www.google.com", target: "_blank"},
  "Click to visit Google"
)

const anotherElememnt = (
  <a href="https://www.google.com" target= "_blank">Visit Google</a>
)
createRoot(document.getElementById('root')).render(
    // MyApp() //This is also possible instead of wriring <MyApp />
    // reactElement
    <App />

)
