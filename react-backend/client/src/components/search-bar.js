import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      startDate: '',
      endDate: '',
      category: ''
    };
  }
  onInputChange(val) {
    this.setState({ term: val })
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.name}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='YYY-MM-DD' />

        <input
          value={this.state.startDate}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='YYY-MM-DD' />

        <input
          value={this.state.endDate}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='YYY-MM-DD' />

        <input
          value={this.state.cetgory}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='YYY-MM-DD' />
        <button>Search</button>
      </div>
    )
  }
}

export default SearchBar;