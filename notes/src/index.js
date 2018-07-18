import React from 'react';
// react 模板编译  react-dom
import ReactDOM from 'react-dom';
import './index.css'; // 全局样式文件
import App from './App'; // 根组件
// import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(<App />, document.getElementById('root')); // 根节点上渲染组件
// registerServiceWorker();
