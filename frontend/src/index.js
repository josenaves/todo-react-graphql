import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import todoReducer from './reducers/todoReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
  opt: {
    mode: 'no-cors'
  }
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

const store = createStore(
  combineReducers({
    todos: todoReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      applyMiddleware(thunk),
      applyMiddleware(logger),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') 
        ? window.__REDUX_DEVTOOLS_EXTENSION__() 
        : f => f,
  )
);

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
