import './TaskForm.css';
import { useState } from 'react';
import formatText from '../../utils/formatText';
import tasksValidation from '../../utils/tasksValidation';

function TaskForm({ onAddTask }) {

  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const validateTasks = () => {
    const validation = tasksValidation(task);

    if (!validation.valid) {
      setError(validation.text);
      setTask('');
      return false;
    }
    setError('');
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateTasks()) return;
    let taskName = formatText(task);
    onAddTask(taskName);
    setTask('');
  }

  return (
    <form className='task-form' onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Agregue una tarea"
        className='task-input'
        value={task}
        onChange={handleChange}
      />
      <small className='task-error'>{error}</small>

      <button type="submit" className='task-button'>Agregar</button>

    </form>
  )
}

export default TaskForm;