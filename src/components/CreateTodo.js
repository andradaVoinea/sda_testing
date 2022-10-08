import React, { useState } from 'react';

const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}
    >
      <label htmlFor="todoInput">Creaza todo</label>
      <input
        placeholder="descriere"
        type="text"
        id="todoInput"
        name="todoInput"
        value={todo}
        onChange={event => {
          setTodo(event.target.value);
        }}
      />
      <button onClick={() => addTodo(todo)}>Submit</button>
    </div>
  );
};

export default CreateTodo;
