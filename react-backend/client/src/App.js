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

  fetchUserSearch(searchObject) {
    let baseURL = "https://api.case.law/v1/cases/";
    let name = `?name_abbreviation=${searchObject.name}`;
    let start = `&decision_start_date=${searchObject.startDate}`;
    let end = `&decision_end_date=${searchObject.endDate}`;
    let category = `&search=${searchObject.category}`;
    console.log("I searched")
    // let searchUrl = baseUrl + 
  }

  render() {
    return (
      <div className="App">
      <SearchBar searchFunction={this.fetchUserSearch} />
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;
