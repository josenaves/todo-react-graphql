import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TodoListContainer from './containers/TodoListContainer';
import TodoForm from './components/TodoForm';

import './App.css';

const style = {
  paper: {
    margin: 'auto',
    width: 600,
    height: 400,
    textAlign: 'center',
    display: 'inline-block'
  },
  fab: {
    margin: 20
  }
};

class App extends Component {
  state = {
    openDialog: false,
  };

  handleOpenDialog = () => {
    this.setState({openDialog: true});
  };

  handleCloseDialog = () => {
    this.setState({openDialog: false});
  };

  render() {
    
    return (
      <div>
        <Paper style={style.paper} zDepth={2}>
          <h2>React/Redux/Apollo/GraphQL TODO</h2>
          <TodoListContainer />
        </Paper>

        <div>
          <FloatingActionButton
            onClick={this.handleOpenDialog}
            style={style.fab}>
              <ContentAdd />
          </FloatingActionButton>
        </div>
        
        <TodoForm
          show={this.state.openDialog}
          close={this.handleCloseDialog}
        />

      </div>
    );
  }
}

export default App;
