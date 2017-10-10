import { gql, graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { loadedTodos } from '../actions/actions';

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

const mapStateToProps = () => ({foo: 'bar'});
const mapDispatchToProps = (dispatch) => ({
  loadedTodos(todos) {
    dispatch(loadedTodos(todos));
  }
});

// export default withApollo(connect(mapStateToProps, mapDispatchToProps)(TodoList));

export default compose(
  graphql(TodoListQuery),
  connect(mapStateToProps, mapDispatchToProps)
)(TodoList);

// export default graphql(TodoQuery)(TodoList);
