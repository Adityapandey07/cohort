import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todo, setTodo] = useState([]);

  useEffect(()=>{
    axios.get("")
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
