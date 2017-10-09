import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const TodoItem = (props) => {
  return (
    <Checkbox
      label={props.todo.description}
    />
  );
};

TodoItem.propTypes = {
  todo : PropTypes.object.isRequired
};

export default TodoItem;
