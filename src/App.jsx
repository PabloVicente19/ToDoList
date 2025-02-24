import { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Title from './components/Title/Title';
import useTaks from './hooks/useTaks';
import tasksValidation from './utils/tasksValidation';

function App() {

  /*
    Funcionalidades a implementar:
      - Edicion de tares: Se podran editar las tareas ya creadas. ==> OK
      - Marcar tareas como completadas. PENDIENTE
      - Ordenar tares por estado(completadas y pendientes).
      - filtrar tareas por estado(completadas y pendientes).
  */
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useTaks();
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');

  const handleAddTaskorEditTask = () => {
    const validation = tasksValidation(task);

    if (!validation.valid) {
      setError(validation.text);
      return;
    }

    if (editIndex !== null) {
      const newTasks = tasks.map((t, i) => {
        if (i === editIndex) {
          return { title: task, completed: t.completed };
        }
        return t;
      });

      setTasks(newTasks);
      setEditIndex(null);
      setTask('');
      return;
    }

    setError('');
    setTasks([...tasks, { title: task, completed: false }]);
    setTask('');
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  const handleEdit = (index) => {
    if (index === null) return;
    setEditIndex(index);
    setTask(tasks[index].title);
  }

  return (
    <div>
      <Title
        text='To Do List' />

      <TaskForm
        task={task}
        setTask={setTask}
        onSubmit={handleAddTaskorEditTask}
        isEditing={editIndex !== null}
        error={error} />

      <TaskList
        tasklist={tasks}
        onDelete={handleDelete}
        onEdit={handleEdit} />
    </div>
  )
}

export default App
