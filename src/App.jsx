import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Title from './components/Title/Title';
import useTaks from './hooks/useTaks';

function App() {

  const [tasks, setTasks] = useTaks();

  const handleAddTask = (task) => {
    setTasks([...tasks, task])
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  const hanldeEdit = (index) => {
    console.log('Edit task', index)
  }

  return (
    <div>
      <Title text='To Do List' />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasklist={tasks} onDelete={handleDelete} onEdit={hanldeEdit} />
    </div>
  )
}

export default App
