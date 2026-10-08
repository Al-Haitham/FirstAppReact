import {useEffect, useReducer, useState} from "react"
import TaskList from "./TaskList"


const initialState = [


function reducer(tasks,action){
  switch (action.payload){
    case "ADD":
      return [...tasks, action.payload]
    case "DELETE":
      return tasks.filter(task=>task.id!=action.payload)
    case "CHECK":
      return tasks.map(task=>task.id==action.payload?{...task, completed: !task.completed}:task)
    case "LOAD":
      return action.payload
      default:
        return tasks
    }
}

function app(){
  const [tasks, dispatch]=useREducer(reducer,[])
  const [text, setText]=useState("")
}

