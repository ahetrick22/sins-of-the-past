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

    this.props.searchFunction(this.state)
    this.setState({
      name: '',
      startDate: '',
      endDate: '',
      category: '',
    })
  }
  onInputChange(val, inputType) {
    let tempState = Object.assign({},this.state);
    tempState[inputType]= val
    
    this.setState({ ...tempState })
  }

  render() {
    return (
      <div className=" row form-group">
        <div className="search-bar input-group">
          <input value={this.state.name} onChange={event => this.onInputChange(event.target.value, "name")} placeholder="Enter Surname" />

          <input value={this.state.startDate} onChange={event => this.onInputChange(event.target.value, "startDate")} placeholder="Start Date (YYYY-MM-DD)" />

          <input value={this.state.endDate} onChange={event => this.onInputChange(event.target.value, "endDate")} placeholder="End Date (YYYY-MM-DD)" />

          <input value={this.state.category} onChange={event => this.onInputChange(event.target.value, "category")} placeholder='Category (e.g "Piracy"' />
          <button onClick={() => this.submitSearch()} className="btn btn-default">
            Find My Degenerate Ancestors
            </button>
        </div>
      
    </div>
    )
  }
}

export default SearchBar;