import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    console.log("props:", props);
      
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({ value: event.target.value });
  }

  handleSubmit(event){
    console.log("saving: ", this.state.value);
    event.preventDefault();
    // save todo
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
          hintText="Add todo description"
        />
      </form>
    );
  }
}

export default TodoForm;
