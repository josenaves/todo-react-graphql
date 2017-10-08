import { ADD_TODO, LOADED_TODOS } from './types.js';

export const loadedTodos = (todos) => ({
  type: LOADED_TODOS,
  todos
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});
