import React, { Component } from 'react';
import './App.css';
class Hello extends Component {
  componentDidMount () {
    setInterval(() => {
      let opacity = this.state.opacity
      opacity -= 0.5
      if (opacity < 0.1) {
        opacity = 1
      }
      this.setState({
        opacity
      })
    },1000)
  }
  state = {
    opacity: 1
  }
  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
        hello { this.props.name }
      </div>
    )
  }
}
class App7 extends Component {
  render () {
    return (
      <div className="App">
        <Hello name="World"/>
      </div>
    )
  }
}

export default App7;
