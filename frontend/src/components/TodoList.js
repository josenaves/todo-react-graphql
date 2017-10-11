import React from 'react';
import { List}  from 'material-ui/List';
import TodoItem from './TodoItem';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

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

  // dispach an action creator
  props.loadedTodos(data.todos);

  const todos = data.todos;
  return (
    <div style={styles.root}>
      <List style={{ width: '90%' }}>
      { todos.map((todo, index) => 
        <TodoItem todo={todo} key={index} {...props} />
      )}
      </List>
    </div>
  );
};

export default TodoList;