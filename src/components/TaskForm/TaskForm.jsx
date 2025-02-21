import './TaskForm.css';

function TaskForm({ task, setTask, onSubmit, isEditing, error }) {

  const handleChange = (e) => {
    setTask(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  }
  return (
    <form className='task-form' onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Agregue una tarea"
        className='task-input'
        value={task}
        onChange={handleChange}
      />
      <small className='task-error'>{error}</small>
      <button type="submit" className='task-button'>
        {isEditing ? 'Editar' : 'Agregar'}
      </button>
    </form>
  )
}

export default TaskForm;