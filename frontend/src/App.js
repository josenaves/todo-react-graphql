import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TodoListContainer from './containers/TodoListContainer';
import TodoForm from './components/TodoForm';
import './App.css';

const style = {
  margin: 'auto',
  width: 600,
  height: 600,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends Component {
  render() {
    return (
      <Paper style={style} zDepth={2}>
        <h2>React/Redux/Apollo/GraphQL TODO</h2>
        <TodoForm />
        <TodoListContainer />
      </Paper>
    );
  }
}

export default App;
