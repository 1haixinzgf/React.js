import React, { Component } from 'react';

import './App.css';

class UserGist extends Component {
  state = {
    userName: '',
    lastGistUrl: ''
  }
  componentDidMount () {
    fetch(this.props.source)
    .then(data => data.json())
    .then(data => {
        console.log(data)
      const lastGist = data[0]
      this.setState({
        userName: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      })
    })

  }
  render () {
    return (
      <div>
        { this.state.userName }'s last gist is 
        <a href={ this.state.lastGistUrl }>here</a>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return(
      <div className="App">
        <UserGist source="https://api.github.com/users/octocat/gists" />
      </div>
    )
  }
}


export default App;

