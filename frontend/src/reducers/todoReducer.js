import {
  LOADED_TODOS,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  COMPLETE_TODO
} from '../actions/types';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
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
