import React from 'react';

const Todo = ({ description, handleComplete, idx }) => {
  return <li onClick={() => handleComplete(idx)}>{description}</li>;
};

export default Todo;
