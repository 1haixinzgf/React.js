import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '@/components/App';
// redux state actions 没有直接的map， 提出将组件分成两部分
// 原来的UI组件部分保留，新建一个container的容器
// redux将数据给container  container在将数据给component
import registerServiceWorker from './registerServiceWorker';
import Root from '@/components/Root';
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
