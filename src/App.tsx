import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';
import './App.css';

interface TaskType {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: '1', text: 'Buy milk' },
    { id: '2', text: 'Walk with dog' },
    { id: '3', text: 'Do homework' },
  ]);

  const addTask = (text: string) => {
    const newTask: TaskType = { id: Date.now().toString(), text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <div>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} text={task.text} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default App;




 

