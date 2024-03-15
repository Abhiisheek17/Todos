// App.jsx
import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";
import { addTodo, deleteTodo, toggleTodo, markCompleted } from "./utils/todoOperations";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputVal.trim() !== "") {
      setTodos((prevTodos) => addTodo(prevTodos, inputVal.trim()));
      setInputVal("");
    }
  };

  const handleDeleteTodo = (todoIndex) => {
    setTodos((prevTodos) => deleteTodo(prevTodos, todoIndex));
  };

  const handleToggleTodo = (todoIndex) => {
    setTodos((prevTodos) => toggleTodo(prevTodos, todoIndex));
  };

  const handleMarkCompleted = (todoIndex) => {
    setTodos((prevTodos) => {
      const updatedTodos = markCompleted(prevTodos, todoIndex);
      setTimeout(() => {
        setTodos(updatedTodos);
      }, 1000);
      return updatedTodos;
    });
  };

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputval={inputVal}
        writeTodo={(e) => setInputVal(e.target.value)}
        addTodo={handleAddTodo}
      />
      <TodoContainer
        todos={todos}
        delTodo={handleDeleteTodo}
        toggleTodo={handleToggleTodo}
        markCompleted={handleMarkCompleted}
        setTodos={setTodos} // Pass setTodos as a prop
      />
    </main>
  );
}

export default App;
