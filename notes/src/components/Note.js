import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import 'moment/locale/zh-cn'//时区
moment.locale('zh-CN')
class Note extends Component {
    state = {
        entity: this.props.entity,
        text: this.props.entity.text,
        open: false,
        updated: this.props.entity.meta.updated || this.props.entity.meta.created,
        destoryEntity: this.props.destoryEntity
    }
    updated () {
        return moment(this.state.updated).fromNow()
    }
    header () {
        return _.truncate(this.state.text, { length: 30 }) || '新建笔记'//_.truncate 去除文字的前后空格
    }
    toggle () {
        this.setState((prevState) => {//prevState = this.state
            return {
                open: !prevState.open
            }
        })
    }
    words () {
        return this.state.text.length
    }
    render () {
        return (
            <div className="item">
                <div className="meta">
                    { this.updated() }
                </div>
                <div className="content">
                    <div className="header" onClick={ this.toggle.bind(this) }>
                        { this.header() }
                    </div>
                    <div className="extra">
                        { this.words() }字
                       { this.state.open &&  <i className="right floated trash icon" onClick={ () => this.state.destoryEntity(this.state.entity) }></i> }
                    </div>
                </div>
            </div>
        )
    }
}

export default Note