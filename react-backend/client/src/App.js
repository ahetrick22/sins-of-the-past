import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => console.log(res.json()))
//      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
      <SearchBar />
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
