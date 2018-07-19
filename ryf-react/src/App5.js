import React, { Component } from 'react';
import './App.css';

class LikeButton extends Component {
  state = {
    Liked: false
  }
  handleClick () {
    // console.log(this)
    this.setState({
      Liked: !this.state.Liked
    })
  }
  render () {
    const text = this.state.Liked? 'like': 'don\'t like'
    return (
      <p onClick={() => {this.handleClick()}}>
        You { text } this click to toggle
      </p>
    )
  }
}

class App5 extends Component {
  
  handleClick () {
    this.refs.myTextInput.focus()
  }
  render () {
    return (
      <div className="App">
      <LikeButton />
        <input type="text" ref="myTextInput"/>
        <input type="button" value="Focus the text input" onClick={ this.handleClick.bind(this) }/>
      </div>
    )
  }
}
export default App5
