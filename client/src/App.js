import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import CaseList from './components/case-list'


import response from './components/ExampleResponse'

import './App.css';

class App extends Component {
  state = { cases: [response.results] }

  fetchUserSearch = async (searchObject) => {
    const data = { user: "James", password: "password" };
    console.log('stringify', JSON.stringify(data));
    const response = await fetch('api/world', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: 'dean',
        login: 'dean',
      })
    })
    console.log('response', response);
    const body = await response.text();
    console.log(body);
    return body;
  }
  fetchUserSearchInput(searchObject) {
    let baseUrl = "https://api.case.law/v1/cases/";
    let name = `?name_abbreviation=${searchObject.name}`;
    let start = `&decision_start_date=${searchObject.startDate}`;
    let end = `&decision_end_date=${searchObject.endDate}`;
    let category = `&search=${searchObject.category}`;
    if (searchObject.startDate || searchObject.endDate) {
      if (!/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(searchObject.startDate) || !/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(searchObject.endDate)) {
        alert("Please enter both dates as YYYY-MM-DD")
        return
      }
    };
    return {
      name_abbreviation: searchObject.name,
      decision_start_api: searchObject.startDate,
      decision_end_date: searchObject.endDate,
      search: searchObject.category
    }

  }



  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <h1 className="display-4">Sins of the Past</h1>
          <hr />
          <p className="lead">How well do you REALLY know your family?</p>
        </div>
        <SearchBar searchFunction={this.fetchUserSearchInput} />
        <CaseList caseList={this.state.cases} />
      </div>
    );
  }
}

export default App;
