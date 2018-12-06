import React, { Component } from 'react'


//Expecting a function to change the state from the App component

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      category: ''
    };
  }

  submitSearch() {

  }
  onInputChange(val, inputType) {

    this.setState({ inputType: val })
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.name}
          onChange={event => this.onInputChange(event.target.value, 'name')}
          placeholder='Enter Surname' />

        <input
          value={this.state.startDate}
          onChange={event => this.onInputChange(event.target.value, 'startDate')}
          placeholder='Start Date (YYYY-MM-DD)' />

        <input
          value={this.state.endDate}
          onChange={event => this.onInputChange(event.target.value, 'endDate')}
          placeholder='End Date (YYYY-MM-DD)' />

        <input
          value={this.state.category}
          onChange={event => this.onInputChange(event.target.value, 'category')}
          placeholder='Category (e.g "Piracy"' />
        <button className="btn btn-default">Search</button>
      </div>
    )
  }
}

export default SearchBar;