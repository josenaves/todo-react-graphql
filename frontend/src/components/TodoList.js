import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import TodoItem from './TodoItem';

class TodoList extends Component {
  componentDidMount() {
    console.log("props:", this.props);
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <div>
          Loading ...
        </div>
      );
    };

    if (data.error) {
      return (
        <div>
          Connection error - is your backend running ?
        </div>
      );
    }

    const todos = data.allTodos.edges;
    return (
      <div>
        { todos.map((todo, index) => 
          <TodoItem todo={todo} key={index}/>
        )}
      </div>
    );
  }
}

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