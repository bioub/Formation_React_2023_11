function TodoSpanValue({ todo, onEditingIdChange }) {
  return (
    <span className="TodoSpanValue" onDoubleClick={() => onEditingIdChange(todo._id)}>
      {todo.title}
    </span>
  );
}

export default TodoSpanValue;
