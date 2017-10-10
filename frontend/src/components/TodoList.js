import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  console.log("props:", props);

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

  // dispach an action creator
  props.loadedTodos(data.todos);

  const todos = data.todos;
  return (
    <div>
      { todos.map((todo, index) => 
        <TodoItem todo={todo} key={index}/>
      )}
    </div>
  );
};

export default TodoList;