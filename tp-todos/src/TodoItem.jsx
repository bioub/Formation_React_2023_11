import TodoInputValue from './TodoInputValue';
import TodoSpanValue from './TodoSpanValue';

function TodoItem({ todo, isEditing = false }) {
  return (
    <div className="TodoItem" data-todo-id={todo._id}>
      <input
        type="checkbox"
        className="todosCompleted"
        checked={todo.completed}
      />
      {!isEditing ? (
        <TodoSpanValue value={todo.title} />
      ) : (
        <TodoInputValue value={todo.title} />
      )}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
