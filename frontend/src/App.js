import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Welcome
        </p>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
