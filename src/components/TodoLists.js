import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <Todo
          description={todo}
          handleComplete={handleComplete}
          key={idx}
          idx={idx}
        />
      ))}
    </ul>
  );
};

export default TodoList;
