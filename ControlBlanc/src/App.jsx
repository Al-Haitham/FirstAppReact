import {useState, useEffect} from "react"

function App(){

  const [tasks,setTasks]=useSTate([])
  const [text, setText]=useState("")

  useEffect(()=>{
    fetch(" https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json)
    .then(data=>setTaks(data))
  },[])

  const addTask=()=>{
    if (text===""){
      setTasks([...tasks,
        id:Date.now(),
        title: text,
        completed: false
      ])
      setText("")
    }
  }

  const deletTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!=id))
  }

  const checkTask=(id)=>{
    setTasks(tasks.map(task=>task.id==id?{...tasks,completed:!task.completed}))
  }

  
}