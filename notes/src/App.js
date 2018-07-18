import React, { Component } from 'react';// 提供React 和Component俩个类
import Notes from './components/Notes'
import './App.css'; // style

// vue的后缀.vue 文件中有三部分  template  js  style
// react的后缀 .js 提供组件类  extend继承  template？ jsx语法  render
class App extends Component {
  render() {
    return (
      <Notes />
    );
  }
}

export default App;
