import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './src/Routes';
import reducers from './src/reducers/index';


export default class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)} >
          <Routes />
        </Provider>
    );
  }
}