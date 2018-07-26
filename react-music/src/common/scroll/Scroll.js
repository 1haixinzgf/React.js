import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './scroll.styl'

class Scroll extends Component {
  componentDidUpdate () { //组件更新后
    if (this.bScroll && this.props.refresh === true ) {
      this.bScroll.refresh()
    }
  }
  componentWillUnmount () {// 即将跳转路由之前，回收组件
    this.bScroll.off('scroll');
    this.bScroll = null; // 将bSroll回收
  }
  componentDidMount () {
    this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView); //返回dom节点
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollView, {
        probeType: 3, //probeType:1：滚动的时候会派发scroll事件，会截流。2：滚动的时候实时派发scroll事件，不会截流。 3：除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        click: this.props.click
      });
      if (this.props.onScroll) {
        this.bScroll.on('scroll', (scroll) => {
          this.props.onScroll(scroll);
        })
      }
    }
  }
  refresh () {
    if (this.bScroll) {
      this.bScroll.refresh();
    }
  }
  render () {
    return(
      <div className="scroll-view" ref="scrollView">
        { this.props.children }
      </div>
    )
  }
}
Scroll.defaultProps = {
  click: true,
  refresh: false,
  onScroll: null,
}
Scroll.propTypes = {
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func
}
export default Scroll;
