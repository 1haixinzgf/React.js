import React, { Component } from 'react'
class Rank extends Component {
    
    addNum () {
        let num = this.state.num
        num++
        this.setState({
            num
        })
    }
    state= {
        num: 0
    }
    render () {
        const num = this.state.num
        return(
            <div className="rank-container" onClick={ this.addNum.bind(this) }>
                { num } 
            </div>
        )
    }
}
export default Rank
