function TodoInputValue({ todo, onTodoEdit }) {
  return (
    <input type="text" className="todosInputValue" value={todo.title} onChange={(e) => onTodoEdit({...todo, title: e.target.value})} />
  );
}

export default TodoInputValue;
