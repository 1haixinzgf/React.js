import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import App from './App'

class Root extends Component {
  render () {
    return (
      <Provider store={store}>{/*  将store提供给APP,这样就可以将redux共享出去 */}
        <App />
      </Provider>
    )
  }
}
export default Root;
