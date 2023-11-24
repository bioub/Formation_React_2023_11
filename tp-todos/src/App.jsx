import { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { _id: 'abcdef1234', title: 'ABC', completed: false },
    { _id: 'dngudtub45', title: 'DEF', completed: true },
    { _id: 'dfgfg35335', title: 'XYZ', completed: false },
  ]);
  const [value, setValue] = useState('ABC');
  const [editingId, setEditingId] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { _id: Math.random().toString(), title: value, completed: false },
    ]);
    setValue('');
  }

  function handleTodoDelete(todoToDelete) {
    setTodos(todos.filter((todo) => todo._id !== todoToDelete._id));
  }

  function handleEditingIdChange(todoId) {
    setEditingId(todoId);
  }

  function handleTodoEdit(newTodo) {
    // stocker dans le tableau todos du state
    setTodos(
      todos.map((todo) => todo._id === newTodo._id ? newTodo : todo)
    )
  }

  return (
    <div className="App">
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" value={value} onChange={(e) => setValue(e.target.value)} />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} isEditing={todo._id === editingId} onTodoDelete={handleTodoDelete} onEditingIdChange={handleEditingIdChange} onTodoEdit={handleTodoEdit} />
        ))}
      </div>
    </div>
  );
}

export default App;
