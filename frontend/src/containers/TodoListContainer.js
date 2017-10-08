import { gql, graphql } from 'react-apollo';
import TodoList from '../components/TodoList';

const TodoQuery = gql`
  {
      allTodos {
        edges {
          node {
            id
            description
            dueDate
            priority
            completed
          }
        }
      }
    }
`;

export default graphql(TodoQuery)(TodoList);