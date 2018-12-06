import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import CaseList from './components/case-list'


import response from './components/ExampleResponse'

import './App.css';

class App extends Component {
  state = {cases: [response.results]}

//   componentDidMount() {
//     fetch('/users')
//       .then(res => console.log(res.json()))
// //      .then(users => this.setState({ users }));
//   }

  fetchUserSearch(searchObject) {
    let baseUrl = "https://api.case.law/v1/cases/";
    let name = `?name_abbreviation=${searchObject.name}`;
    let start = `&decision_start_date=${searchObject.startDate}`;
    let end = `&decision_end_date=${searchObject.endDate}`;
    let category = `&search=${searchObject.category}`;
    if (searchObject.startDate || searchObject.endDate){
    if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(searchObject.startDate) || !/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(searchObject.endDate)){
      alert("Please enter both dates as YYYY-MM-DD")
      return
    }
    };

    let searchUrl = baseUrl + name + start + end + category;
    console.log(searchUrl)
     
  }

  render() {
    console.log(this.state)
    return (
      <div className="App container">
      <SearchBar searchFunction={this.fetchUserSearch} />
       <CaseList caseList={this.state.caseList}/> 
      </div>
    );
  }
}

export default App;
