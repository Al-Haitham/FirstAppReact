import {useState, useContext} from "react";
import {TaskContext} from "../Context/TaskContext"

const TaskForm=()=>{
    const {dispatch}=useContext(TaskContext);
    const {title, setTitle}=useState("")

    return(
        <div className="card w-75 mx-auto">
                <div className="card-header">
                    <h2>Add new Task</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" value={title}/>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
        </div>
    )


}
export default TaskForm