import { FaEdit, FaTrash } from 'react-icons/fa'
import './taskItem.css'
export default function TaskItem({ task, index, onDelete, onEdit }) {
  const { title } = task
  return (
    <li className='task'>
      <span className='task-title'>{title}</span>
      <div className='task-actions'>
        <button 
          className='task-button task-edit' 
          onClick={() => onEdit(index)}> <FaEdit /> </button>
        <button className='task-button task-delete' onClick={() => onDelete(index)}>
          <FaTrash />
        </button>
      </div>
    </li>
  )
}
