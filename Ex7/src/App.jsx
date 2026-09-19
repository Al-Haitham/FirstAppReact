import {useEffect, useState} from "react";
import TaskList from "./TaskList";
import "./App.css";

const App=()=>{
  const [tasks, setTasks]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response)=>response.json())
       .then((data)=>setTasks(data))
  },[]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id))
  }

  return(
    <main className="App">
      <h1>Todo list </h1>
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  );
}

export default App;