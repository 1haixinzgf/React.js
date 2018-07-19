import React, { Component } from 'react';
import PropTypes from 'prop-types' // 引用prop-types对传入的props进行类型检测
import './App.css';
class MyTitle extends Component {
  render () {
    return (
      <h1>{ this.props.title }</h1>
    )
  }
}
MyTitle.propTypes = {
  title: PropTypes.string
}
class App4 extends Component {
  render () {
    const data = '123'
    return (
      <div className="App">
        <MyTitle title={ data }/>
      </div>
    )
  }
}

export default App4;
