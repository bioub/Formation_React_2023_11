import TodoInputValue from './TodoInputValue';
import TodoSpanValue from './TodoSpanValue';

function TodoItem({ todo, isEditing = false, onTodoDelete, onEditingIdChange, onTodoEdit }) {
  return (
    <div className="TodoItem" data-todo-id={todo._id}>
      <input
        type="checkbox"
        className="todosCompleted"
        checked={todo.completed}
        onChange={(e) => onTodoEdit({...todo, completed: e.target.checked})}
      />
      {!isEditing ? (
        <TodoSpanValue todo={todo} onEditingIdChange={onEditingIdChange} />
      ) : (
        <TodoInputValue todo={todo} onEditingIdChange={onEditingIdChange} onTodoEdit={onTodoEdit} />
      )}
      <button className="todosDeleteBtn" onClick={() => onTodoDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
