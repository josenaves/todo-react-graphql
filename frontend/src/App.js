import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';

import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';

import TodoListContainer from './containers/TodoListContainer';
import TodoForm from './components/TodoForm';

import './App.css';

const style = {
  paper: {
    margin: 'auto',
    width: 600,
    height: 600,
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

  renderDialog() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleCloseDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCloseDialog}
      />,
    ];

    return (
      <Dialog
        title="New task"
        actions={actions}
        modal={true}
        open={this.state.openDialog}
        onRequestClose={this.handleCloseDialog}
      >
        <TodoForm />
      </Dialog>
    );
  }

  render() {
    
    return (
      <div>
        <Paper style={style.paper} zDepth={2}>
          <h2>React/Redux/Apollo/GraphQL TODO</h2>
          <TodoListContainer />
        </Paper>

        <FloatingActionButton
          onClick={this.handleOpenDialog}
          style={style.fab}>
            <ContentAdd />
        </FloatingActionButton>

        { this.renderDialog() }

      </div>
    );
  }
}

export default App;
