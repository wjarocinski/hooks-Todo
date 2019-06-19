import React, { useState } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './overrides.scss';
import "./App.css";



//ADD TODO
function ToDoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' className='input' placeholder='Add Todo...' value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}








//COMPONENTS

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className='todo'>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}> Delete </button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },
    {
      text: 'Learn Angular',
      isCompleted: false
    },
    {
      text: 'Learn Vue',
      isCompleted: false
    },
    {
      text: 'Learn about GraphQL',
      isCompleted: false
    },
    {
      text: 'Learn about Redux',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
