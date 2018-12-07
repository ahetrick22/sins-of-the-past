import React, { Component } from 'react';

import SearchBar from './components/search-bar'
import CaseList from './components/case-list'


import sampleResponse from './components/ExampleResponse'

import './App.css';

class App extends Component {
  state = { cases: null };


  fetchUserSearchInput = async (searchObject) => {
    console.log(searchObject)
    let searchObjectx = {

      name_abbreviation: searchObject.name,
      decision_start_date: searchObject.startDate,
      decision_end_date: searchObject.endDate,
      search: searchObject.category,
      
      full_case: 'true'
      
    }

    console.log('fetching');
    const response = await fetch('/casesearch', {
      method: 'POST',
      headers: {
        // "Authorization": "08bf35ee49c3ebe65b39f0588a67af4d0a44",
        "Content-Type": "application/json"},
      body: JSON.stringify(searchObjectx)
    })
    console.log('response', response);
    const body = await response.text();
    console.log("I'm a case!",JSON.parse(body));
    await this.setState({cases: JSON.parse(body).results})
    console.log(this.state.cases);
    return body;
  }

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

// <div className="container-c left">
//   <div className="content">
//     <h2>{this.state.cases[0].decision_date.slice(0,4)}</h2>
//     <p><strong>{this.state.cases[0].name}</strong></p>
//     <p> I am a case summary </p>
//   </div>
// </div>
// <div className="container-c right">
//   <div className="content">
//     <h2>2016</h2>
//     <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
//   </div>
// </div>
// <div className="container-c left">
//   <div className="content">
//     <h2>2015</h2>
//     <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
//   </div>
// </div>
// <div className="container-c right">
//   <div className="content">
//     <h2>2012</h2>
//     <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
//   </div>
// </div>
// <div className="container-c left">
//   <div className="content">
//     <h2>2011</h2>
//     <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
//   </div>
// </div>
// <div class="container-c right">
//   <div className="content">
//     <h2>2007</h2>
//     <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
//   </div>
// </div>
// </div>
