import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    console.log("props:", props);
      
    this.state = { description: '', priority: '', dueDate: null };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
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
          name="description"
          value={this.state.description}
          onChange={this.handleInputChange}
          hintText="Add todo description"
          floatingLabelText="Description"
        />
        <DatePicker
          name="dueDate"
          value={this.state.dueDate}
          onChange={(e, date) => this.setState({ dueDate: date })}
          hintText="Choose the due date"
          floatingLabelText="Due date"
        />
        <TextField
          name="priority"
          value={this.state.priority}
          onChange={this.handleInputChange}
          hintText="Add todo priority"
          floatingLabelText="Priority"
        />
      </form>
    );
  }
}

export default TodoForm;
