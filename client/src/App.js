import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import CaseList from './components/case-list'

import './App.css';

class App extends Component {
  //holds the current list of cases, resets on a new search
  state = {
    cases: null,
    caseSearched: false
  };

  //validate the input data
  validateParameters = paramObject => {
    let valid = true;
    let alertMessage = "Please enter: ";
    if (paramObject.name_abbreviation.length === 0) {
      alertMessage += `a surname,`;
      valid = false;
    }

    if (paramObject.decision_date_min.length !== 10) {
      alertMessage += `a 4 digit start year,`;
      valid = false;
    }

    if (paramObject.decision_date_max.length !== 10) {
      alertMessage += `a 4 digit end year`;
      valid = false;
    }
    if (!valid) {
      alert(alertMessage);
    }
    return valid;
  }

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

    //only let the user search if the parameters are valid
    if(this.validateParameters(paramObject)) {
      //send the request and then convert the response to text and add to state
      const response = await fetch('/casesearch', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"},
        body: JSON.stringify(paramObject)
      })
      const body = await response.text();
      await this.setState({cases: JSON.parse(body).results})
      await this.setState({caseSearched: true});
    }
  }

  //JSX for main page
  render() {
    return (
      <div className="App container">
          <h1 className="main-page-text">Sins of the Past</h1>
          <hr />
          <p className="lead main-page-text">How well do you REALLY know your family?</p>
          <SearchBar searchFunction={this.fetchUserSearchInput} />
          <CaseList caseSearched = {this.state.caseSearched} caseList={this.state.cases} />
        </div>
    );
  }
}

export default App;
