import {
  LOADED_TODOS,
  ADD_TODO,
  COMPLETE_TODO
} from '../actions/types';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case LOADED_TODOS:
      return action.todos;
      
    case ADD_TODO:
      const { description, dueDate, priority, completed, id } = action.todo;
      return [
        ...state,
        {
          description,
          dueDate,
          priority,
          completed,
          id
        }
      ];

    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      });

    default:
      return state
  }
}

export default todoReducer;
