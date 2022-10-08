import React from 'react';

const Todo = ({ description, handleComplete, idx }) => {
  return (
    <li testid={description} title={description}>
      <button onClick={() => handleComplete(idx)}>{description}</button>
    </li>
  );
};

export default Todo;
