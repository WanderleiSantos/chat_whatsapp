import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/Routes';
import reducers from './src/reducers/index';

export default class App extends Component {

  componentWillMount(){
    let config = {

    }
    firebase.initializeApp(config);    
  }

  render() {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
          <Routes />
        </Provider>
    );
  }
}