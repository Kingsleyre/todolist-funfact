import React, { useState } from 'react';
import Task from './Task';
import TodoForm from './TodoForm';

const TodoCategory = ({ title }) => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  const onTaskAdded = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <h1>{title}</h1>
      <TodoForm onTaskAdded={onTaskAdded} />
      <ul>
        {tasks.map((task, index) => (
          <Task key={index}>{task}</Task>
        ))}
      </ul>
    </>
  );
};

export default TodoCategory;
