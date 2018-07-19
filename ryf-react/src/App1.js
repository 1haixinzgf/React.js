import React, { Component } from 'react';
import './App.css';

class App1 extends Component {
  render () {
    const names = ['Alice', 'Ebily']
    return(
      <div className="App">
        <ul>
          {names.map((name,index) => {
            return (
              <div key={index}>Hello,{ name }</div>
            )
          }) }
        </ul>
      </div>
    )
  }
}

export default App1;
