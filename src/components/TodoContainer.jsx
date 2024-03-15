// TodoContainer.jsx
// eslint-disable-next-line no-unused-vars
import React, { memo } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { deleteAll } from "../utils/todoOperations";

const TodoContainer = memo(({ todos, delTodo, toggleTodo, markCompleted, setTodos }) => {
  const handleDeleteAll = () => {
    const updatedTodos = deleteAll(todos);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          delTodo={delTodo}
          toggleTodo={toggleTodo}
          markCompleted={markCompleted}
        />
      ))}
      {todos.length > 0 && (
        <button className="delete-all-btn" onClick={handleDeleteAll}>
          Delete All
        </button>
      )}
    </div>
  );
});

TodoContainer.displayName = "TodoContainer";

TodoContainer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  delTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired, // Add setTodos prop type
};

export default TodoContainer;
