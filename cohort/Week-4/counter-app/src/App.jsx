import { useState } from "react";

function App(){

  const [todos, setTodos] = useState([{
    title: "Go to Gym",
    description: "from 7pm to 9pm",
    completed: false
  },{
    title: "Go to Gym",
    description: "from 7pm to 9pm",
    completed: false
  },{
    title: "Go to Gym",
    description: "from 7pm to 9pm",
    completed: false
  },{
    title: "Go to Gym",
    description: "from 7pm to 9pm",
    completed: false
  },
])

function addTodo(){
  setTodos([...todos, {
    title: "new Todo",
    description: "desc of new todo"
  }])
}

return(
  <div>
    <button onClick={addTodo}> Add a random todo</button>
    {
      todos.map(function(todo){
        return <Todo title={todo.title} description = {todo.description}></Todo>
      })
    }
  </div>
)
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div> 
  
}

export default App