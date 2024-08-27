import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Postgres",
    password: "admin@1"
  }

  let newArr = ["Ram", "Lakshaman", "Janki"];
  return (
    <>
      <h1 className='bg-orange-400 p-5 rounded-xl mb-4'>Props and Tailwind</h1>
      <Card channel = "Hello Guys" someObj = {myObj} someArr = {newArr}/>
    </>
  )
}

export default App
