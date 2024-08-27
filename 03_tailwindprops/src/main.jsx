import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Card from './components/Card.jsx'


// let myObj = {
//   username: "Postgres",
//   password: "admin@1"
// }
createRoot(document.getElementById('root')).render(
    <App />
    /* <Card channel = "Hello Guys" someObj = {myObj}/> */
)
