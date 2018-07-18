import React, { Component } from 'react'
import { db, loadCollection } from '../database'
import Note from './Note'
import Rank from './Rank'
class Notes extends Component {
  constructor (props) { // 进行数据库的链接
    super(props) // 把父组件（Component）的构造函数去执行
    this.getInitialData()
  }
  getInitialData () {
    loadCollection('notes')
    .then(collection => {
      // console.log(collection)
      // collection.insert([
      //   {
      //     text: 'hello ~'
      //   },
      //   {
      //     text: 'hola ~'
      //   }
      // ]);
      db.saveDatabase()//保存数据
      const entities = collection.chain()// 进入表
      .find()
      .simplesort('$loki', 'isdesc')//输入查询字段，然后排序
      .data()
      // console.log(entities)
      this.setState({
        entities
      })
    })
  }
  state = { // react 的数据 相当于vue的data
    entities: []
  }
  createEntry () {
    // console.log('你点了啥')
    console.log(this.state.entities)
    loadCollection('notes')
    .then((collection) => {
      const entity = collection.insert({
        text: ''
      })
      db.saveDatabase()
      this.setState((preState) => {
        const _entities = preState.entities
        _entities.unshift(entity)
        return {
          entities: _entities
        }
      })
    })
  }
  destoryEntity (entity) {
    console.log(entity)
    let _entities = this.state.entities.filter((_entity) => {
      return  _entity.$loki !== entity.$loki   //$loki 唯一标识
    })
    this.setState({
      entities: _entities
    })
    loadCollection('notes')
    .then((collection) => {
      collection.remove(entity)
      db.saveDatabase()
    })
  }
  render () {
    // react 独有的JSX模板引擎
    // 在js里面直接写html
    // react 为什么类名要写成className
    // html => js node  是会被编译成js的 class是一个关键字
    // console.log(this.state.entities)
    const entities = this.state.entities
    const noteItems = entities.map((entity, index) => 
      <Note key={ entity.$loki } entity={ entity } destoryEntity={ this.destoryEntity.bind(this) }/>
      // return <li key={index}>{entity}</li>
    )//把entities变成能够编译的数组(jsx数组，能够直接输出)
    // console.log(noteItems)
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
        </h4>
        <button className="ui right floated basic violet button" onClick={ this.createEntry.bind(this) }> 添加笔记</button> {/* bind会返回一个新的函数,这个函数的this指向指向bind绑定的那个this */}
        <div className="ui divide items">
          { noteItems }
          { !this.state.entities.length && <span className="ui small disabled heder">还没有笔记，请先添加</span> } { /*相当于v-if */ }
        </div>
        <Rank />
      </div>
    )
  };
}
export default Notes