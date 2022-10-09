import React from 'react';

const Todo = ({ description, handleComplete, idx }) => {
  return (
    <li
      testid={description}
      title={description}
      onClick={() => handleComplete(idx)}
    >
      {description}
    </li>
  );
};

export default Todo;
