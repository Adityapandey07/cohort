import { useState } from "react"
import React from "react";

function App() {
  const [firstTitle, setTitle] = useState("my name is aditya");  

  function updateTitle(){
    setTitle("my name is " + Math.random());
  }

  return(
    <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={firstTitle}></Header>
    <Header title="aditya1"></Header>
    <Header title="aditya1"></Header>
    <Header title="aditya1"></Header>
    <Header title="aditya1"></Header>
    <Header title="aditya1"></Header>
    </div>
  )
}

const Header = React.memo(function Header({title}){
  return (<div>
    <h1>{title}</h1>
  </div>)
})

export default App
