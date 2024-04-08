import React, { useState } from 'react';
import TaskForm from './components/TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => (
          <li>{task.text}</li>
        ))}
      </ul>
      <TaskForm onAddTask={addTask} />
    </div>
  );
};

export default TaskList;
