import React, { Component } from 'react';
import './App.css';

class NodeList extends Component {
    render () {
        return (
            <ol>
                { this.props.children.map((child, index) => <li key={ index }>{ child }</li>) }
            </ol>
        )
    }
}

class App3 extends Component {
  render () {
    return (
        <div className="App">
        <NodeList>
            <span>Hello</span>
            Hello
        </NodeList>

        </div>
    )
  }
}

export default App3;
