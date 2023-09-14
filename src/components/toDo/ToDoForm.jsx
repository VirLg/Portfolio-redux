import React, { useState } from 'react';

const ToDoForm = ({ formSubmit }) => {
  const [name, setName] = useState('');
  const [task, setTask] = useState('');
  const handleChange = ({ target }) => {
    target.name === 'name' ? setName(target.value) : setTask(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    formSubmit({ name, task });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Task
        <input type="text" name="task" value={task} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToDoForm;
