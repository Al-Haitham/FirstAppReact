import {useContext} from "react"
import { TaskContext } from "../Context/TaskContext"

const TaskList=()=>{
    const {state}=useContext(TaskContext)
    return(
        <div className="w-75 mx-auto mb-4">
            <h2>Task Liste</h2>
            <ul className="list-group">
                {(state.tasks.length>0
                ?(
                    state.tasks.length>0&&(
                        state.tasks.map((t,pos)=><TaskItem key={task.id} task={t}/>)
                    )

                ):<p>No Taks</p>
                )
                }

            </ul>

        </div>
    )
}
export default TaskList