import React, { Component } from 'react';
import './App.css';
import App1 from './App1.js'
import HelloMessage from './components/HelloMessage'
class App2 extends Component {
  render () {
    const arr = [
        <h1 key="1">hello world</h1>,
        <h2 key="2">React is awsome</h2>
    ]
    
    return(
      <div className="App">
        <ul>
          { arr }
        </ul>
        <App1 />
        <HelloMessage name="jo"/>
      </div>
    )
  }
}

export default App2;
