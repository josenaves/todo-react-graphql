import { gql, graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { loadedTodos, deleteTodo } from '../actions/actions';

export const TodoListQuery = gql`
  {
    todos {
      id
      description
      dueDate
      completed
      priority
    }
  }
`;

const mapDispatchToProps = (dispatch) => ({
  loadedTodos(todos) {
    dispatch(loadedTodos(todos));
  },
  deleteTodo(todo, client) {
    dispatch(deleteTodo(todo, client));
  }
});

export default withApollo(
  compose(
    graphql(TodoListQuery),
    connect(null, mapDispatchToProps)
  )
(TodoList));


