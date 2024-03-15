// Todo.jsx
// eslint-disable-next-line no-unused-vars
import React, { memo } from "react";
import PropTypes from "prop-types";

const Todo = memo(({ todo, index, delTodo, markCompleted }) => {
  const handleDelete = () => {
    delTodo(index);
  };

  const handleComplete = () => {
    markCompleted(index);
  };

  return (
    <div className={`Todo ${todo.isCompleted ? 'completed' : ''}`}>
      <p style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        {todo.text}
      </p>
      <div className="Action">
        <button onClick={handleComplete}>
          {todo.isCompleted ? "Undo" : "Done"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
});

Todo.displayName = "Todo";

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  delTodo: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
};

export default Todo;