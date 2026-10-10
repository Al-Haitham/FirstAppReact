import {TaskProvider} from "./Context/TaskContext";
import TaskForm from "./Components/TaskForm";
import TaskItem from "./Components/TaskItem";
import TaskList from "./Components/TaskList";


const App=()=>{
  return (
    <TaskProvider>
      <TaskList/>
      <TaskForm/>
    </TaskProvider>
  )
}
export default App