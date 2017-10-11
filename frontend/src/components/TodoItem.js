import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const TodoItem = (props) => {
  const iconButton = (
    <IconButton onClick={ () => props.deleteTodo(props.todo, props.client)}>
      <ActionDelete/>
    </IconButton>
  );

  return (
    <ListItem
      primaryText={ props.todo.description }
      leftCheckbox={ <Checkbox /> }
      rightIconButton={ iconButton }
    />
  );
};

TodoItem.propTypes = {
  todo : PropTypes.object.isRequired
};

export default TodoItem;
