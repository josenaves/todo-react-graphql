import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {

  const { data } = props;
  
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
};

export default TodoList;