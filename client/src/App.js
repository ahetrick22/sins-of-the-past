import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import CaseList from './components/case-list'

import './App.css';

class App extends Component {
  //holds the current list of cases, resets on a new search
  state = {
    cases: null
  };

  //fetches the user's search from the local server by submitting the query params
  fetchUserSearchInput = async (searchObject) => {

    //constructs the parameter object
    let paramObject = {
      name_abbreviation: searchObject.name,
      decision_date_min: `${searchObject.startDate}-01-01`,
      decision_date_max: `${searchObject.endDate}-01-01`,
      search: searchObject.category,
      full_case: 'true'
    }

    //send the request and then convert the response to text and add to state
    const response = await fetch('/casesearch', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify(paramObject)
    })
    const body = await response.text();
    console.log("here", JSON.parse(body))
    await this.setState({cases: JSON.parse(body).results})
  }

  //JSX for main page
  render() {
    return (
      <div className="App container">
          <h1>Sins of the Past</h1>
          <hr />
          <p className="lead">How well do you REALLY know your family?</p>
          <SearchBar searchFunction={this.fetchUserSearchInput} />
          <CaseList caseList={this.state.cases} />
        </div>
    );
  }
}

export default App;
