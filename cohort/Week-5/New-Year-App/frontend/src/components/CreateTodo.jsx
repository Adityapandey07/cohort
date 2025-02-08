import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }}type="text" placeholder="Enter the Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);

        }}></input><br></br>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Enter the Description" onChange={function(e){
            const value = e.target.value;
            setdescription(value);

        }} ></input><br></br>
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={()=>{
            fetch("https://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: { 
                    "content-type":"application/json"
                    }
            })
        }}>Add Todo</button>
    </div>
}