import { memo } from "react";
import { useTodos } from "../../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  console.log("Render:", todo.text);

  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>❌</button>
    </li>
  );
}

export default memo(TodoItem);