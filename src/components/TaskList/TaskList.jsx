
import TaskItem from '../TaskItem/TaskItem';
import './taskList.css';

function TaskList({ tasklist, onDelete, onEdit }) {

  const showTasks = () => {
    return tasklist.map((task, index) => {
      return (
        <TaskItem key={index} task={task} index={index} onDelete={onDelete} onEdit={onEdit} />
      )
    })
  }

  return (
    <ul className='task-list'>
      {showTasks()}
    </ul>
  )
}

export default TaskList;