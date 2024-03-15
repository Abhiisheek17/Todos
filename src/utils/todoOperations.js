// todoOperations.js
import { produce } from "immer";

export const addTodo = (todos, todoText) =>
  produce(todos, (draft) => {
    draft.push({ text: todoText, isCompleted: false });
  });

export const deleteTodo = (todos, todoIndex) =>
  produce(todos, (draft) => {
    draft.splice(todoIndex, 1);
  });

export const toggleTodo = (todos, todoIndex) =>
  produce(todos, (draft) => {
    draft[todoIndex].isCompleted = !draft[todoIndex].isCompleted;
  });

export const markCompleted = (todos, todoIndex) =>
  produce(todos, (draft) => {
    const completedTodo = draft[todoIndex];
    completedTodo.isCompleted = true;
    draft.splice(todoIndex, 1);
    draft.push(completedTodo);
  });

export const deleteAll = (todos) =>
  produce(todos, (draft) => {
    draft.length = 0;
  });