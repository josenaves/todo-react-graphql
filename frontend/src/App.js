import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Welcome
        </p>
        <TodoList />
      </div>
    );
  }
}

export default App;
