import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
  return <div className="todo">{ todo.text }</div>;
}

function TodoForm({ addTodo }) {
  const [ value, setValue ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={ e => setValue(e.target.value) }/>
    </form>
  )
}

function App() {
  const [ todos, setTodos ] = useState([
    {
      text: 'Learn about React Hooks',
      isCompleted: false
    },
    {
      text: 'Go to Vlaska',
      isCompleted: false
    },
    {
      text: 'Workout and help my parents',
      isCompleted: false
    },
  ])

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App;
