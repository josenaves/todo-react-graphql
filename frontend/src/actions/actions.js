import { gql } from 'react-apollo';
import { ADD_TODO, LOADED_TODOS } from './types.js';
import { TodoListQuery } from '../containers/TodoListContainer';

export const loadedTodos = (todos) => ({
  type: LOADED_TODOS,
  todos
});

export const addTodo = (todo, client) => async (dispatch) => {
  try {
    const ret = await client.mutate({
      mutation : addTaskMutation,
      variables: {
        "desc": todo.description,
        "due": todo.dueDate,
        "priority": todo.priority
      },
      refetchQueries: [
        { query: TodoListQuery }
      ]     
    });
    
    dispatch({
      type: ADD_TODO,
      todo: ret.data.addTodo
    });
  }
  catch(err) {
    console.error("Error adding new todo", err)
  }
}

const addTaskMutation = gql`
  mutation add($desc: String!, $due: String!, $priority: Int!) {
    addTodo(description: $desc, dueDate:$due, priority: $priority, completed: false) {
      id
      description
      dueDate
      priority
      completed
    }
  }
`;
