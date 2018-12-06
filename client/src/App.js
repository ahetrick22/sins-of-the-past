import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import CaseList from './components/case-list'


import response from './components/ExampleResponse'

import './App.css';

class App extends Component {
  state = { cases: [response.results] }

  //   componentDidMount() {
  //     fetch('/users')
  //       .then(res => console.log(res.json()))
  // //      .then(users => this.setState({ users }));
  //   }

  

  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <h1 className="display-4">Sins of the Past</h1>
          <hr />
          <p className="lead">How well do you REALLY know your family?</p>
        </div>
        <SearchBar searchFunction={this.fetchUserSearch} />
        <CaseList caseList={this.state.cases} />
      </div>
    );
  }
}

export default App;
