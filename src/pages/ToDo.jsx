import ToDoForm from 'components/todo/ToDoForm';
import React from 'react';

const ToDo = () => {
  const formSubmit = prop => {
    console.log('props', prop);
  };
  return (
    <div>
      <ToDoForm formSubmit={formSubmit} />
    </div>
  );
};

export default ToDo;
