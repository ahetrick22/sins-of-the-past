import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import './App.css';

class App extends Component {
  state = {users: []}

//   componentDidMount() {
//     fetch('/api/hello')
//       .then(res => console.log(res.json()))
//
// //      .then(users => this.setState({ users }));
//   }

  fetchUserSearch = async (searchObject) => {
    const data = {user: "James", password: "password"};
    console.log('stringify',JSON.stringify(data));
    const response = await fetch('api/world', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
    name: 'dean',
    login: 'dean',
  })
})
    console.log('response',response);
    const body = await response.text();
    console.log(body);
    return body;
    // let baseUrl = "https://api.case.law/v1/cases/";
    // let name = `?name_abbreviation=${searchObject.name}`;
    // let start = `&decision_start_date=${searchObject.startDate}`;
    // let end = `&decision_end_date=${searchObject.endDate}`;
    // let category = `&search=${searchObject.category}`;
    // if (searchObject.startDate || searchObject.endDate){
    // if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(searchObject.startDate) || !/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(searchObject.endDate)){
    //   alert("Please enter both dates as YYYY-MM-DD")
    //   return
    }
    //};

 // headers: {'Accept': 'application/json',"Content-Type": "application/json; charset=utf-8"},
    //let searchUrl = baseUrl + name + start + end + category;
    //console.log(searchUrl)

  //}

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
