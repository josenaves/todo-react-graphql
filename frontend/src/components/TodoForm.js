import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { addTodo } from '../actions/actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: '',
      dueDate: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  renderDialog() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.close}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.createNewTask}
      />
    ];

    return (
      <Dialog
        title="New task"
        actions={actions}
        modal={true}
        open={this.props.show}
        onRequestClose={this.props.close}
      >
        {this.renderForm()}
      </Dialog>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleSubmit(event){
    event.preventDefault();
  }

  createNewTask = () => {
    // call the action creator addTodo
    const { description, priority, dueDate } = this.state;
    const { client } = this.props;
    this.props.addTodo({ description, priority, dueDate }, client);
    this.props.close();
    this.setState({ description: '', priority: '', dueDate: null });
  }

  renderForm() {
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
          autoOk={true}
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

  render() {
    return (
      <div>
        {this.renderDialog()}
      </div>
    );
  }
}

TodoForm.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addTodo(todo, client) {
    dispatch(addTodo(todo, client));
  }
});

export default withApollo(connect(null, mapDispatchToProps)(TodoForm));
