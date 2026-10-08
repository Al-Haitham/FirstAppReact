function Task({ task, onToggle, onDelete }) {
  return (
    <div className="task p-4 m-4" onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'grey' : 'white' }}>
        {task.title}
      </span>
      <button className="btn btn-danger" onClick={(e)=>{e.stopPropagation(); onDelete(task.id)}}>del</button>
    </div>
  );
}
export default Task;
