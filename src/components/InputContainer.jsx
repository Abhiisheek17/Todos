// InputContainer.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function InputContainer({ inputval, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input type="text" value={inputval} onChange={writeTodo} />
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
}

InputContainer.propTypes = {
  inputval: PropTypes.string.isRequired,
  writeTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default InputContainer;