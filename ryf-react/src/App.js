import React, { Component } from 'react'
// 对react ui 阿里的antd部分引用,减少打包带的大小  install 全局访问
import { Table, pagination, Input, Row, Button, Modal, Form } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
const { Search } = Input
const FormItem = Form.Item
const { confirm } = Modal

class App extends Component {
  state = {
    visible: false,
    users: [{
      username: 'hx',
      age: 22,
      address: '上海',
      id: 1
    }]
  }
  columns = [{
    dataIndex: 'username',
    title: '用户'
  }, {
    dataIndex: 'age',
    title: '年龄'
  }, {
    dataIndex: 'address',
    title: '地址'
  }, {
    dataIndex: 'action',
    title: '操作',
    width: 200,
    render: (text, row) => {
      // console.log(text, row)
      return (
        <div>
          <Button type="primary" onClick={ () => { this.modal('edit', row) }}>编辑</Button>
          <Button type="danger" style={{marginLeft: 10}} onClick={ () => this.remove(row) }>删除</Button>
        </div>
      )
    }
  }]
  modal (type, row) {
    this.setState({
      visible: true
    }, () => {
      this.props.form.resetFields()
      if (type === 'add') {
        console.log(type, row)
      } else {
        this.props.form.setFieldsValue({
          username: row.username,
          age: row.age,
          address: row.address
        })
      }
    })
  }
  handleOk () {
    // console.log('ok')
    // this.setState({
    //   visible: false
    // })
    this.props.form.validateFieldsAndScroll((err, values) => { 
      // validateFieldAndScroll异步回调
      // console.log(err)
      const newUsers = Object.assign(...(this.state.users), values)
      this.setState({
        userslo: [newUsers]
      })
      if(!err) {
        this.setState({
          visible: false
        })
      }
    })
  }
  remove (row) {
    const that = this
    confirm({
      title: '是否要删除该用户',
      okText: '是',
      cancelText: '否',
      onOk () {
        const _users = that.state.users.filter(data => {
          return data.id !== row.id
        })
        that.setState({
          users: _users
        })
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span:4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        xm: { span: 16 }
      }
    }
    return(
      <div>
        <Row>
          <Search style={{width:300}}/>
          <Button type="primary" style={{marginLeft:20}} onClick={() => this.modal('add')} >添加用户</Button>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Table dataSource={ this.state.users } columns={ this.columns } rowKey={row=>row.id} bordered pagination={false}/>
        </Row>
        <Modal title="添加用户" visible={ this.state.visible } onOk={ () => {this.handleOk()} } onCancel={() => this.setState({ visible: false })}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', {// getFieldDecorator装饰器
                  rules: [{ required: true, message: 'Please input your username'}]
                })(<Input placeholder="UserName" />)
              }
            </FormItem>
            <FormItem label="年龄">
              { getFieldDecorator('age', {
                  rules: [{ required: true,message: 'Please input your age' }]
                })(<Input placeholder="age"/>) }
            </FormItem>
            <FormItem label="地址">
              { getFieldDecorator('address', {
                  rules: [{ required: true,message: 'Please input your address' }]
                })(<Input placeholder="address"/>) }
            </FormItem>
          </Form>
        </Modal>
        
      </div>
    )
  }
}

export default Form.create()(App)
