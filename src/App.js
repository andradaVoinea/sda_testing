import React, { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoLists';
import _todos from './mocks/todos.json';

function App() {
  const [todos, setTodos] = useState(_todos);

  const handleComplete = todo => {
    console.log({ todo });
    const validTodos = todos.filter((_, idx) => idx !== todo);
    setTodos(validTodos);
  };

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
