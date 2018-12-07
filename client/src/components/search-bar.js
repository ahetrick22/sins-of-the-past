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

  }
  onInputChange(val, inputType) {
    let tempState = Object.assign({},this.state);
    tempState[inputType]= val

    this.setState({ ...tempState })
  }

  render() {
    return (
      <div className=" row form-group">
      <div className="col-1"></div>
        <div className="search-bar input-group col">
          <input type = "text" value={this.state.name} onChange={event => this.onInputChange(event.target.value, "name")} placeholder="Enter Surname" />

          <input type = "text" value={this.state.startDate} onChange={event => this.onInputChange(event.target.value , "startDate")} placeholder="Starting Year (YYYY)" />

          <input type = "text" value={this.state.endDate} onChange={event => this.onInputChange(event.target.value, "endDate")} placeholder="Ending Year (YYYY)" />

          <select value={this.state.category} onChange={event => this.onInputChange(event.target.value, "category")}>
            <option value = "Piracy">Piracy</option>
            <option value = "Murder">Murder</option>
            <option value = "Pillaging">Pillaging</option>
            <option value = "Witchcraft">Witchcraft</option>
            <option value = "Insurance Fraud">Insurance Fraud</option>
            <option value = "Tax Evasion">Tax Evasion</option>
            <option value = "Thievery">Thievery</option>
            <option value = "Hijacking">Hijacking</option>
            <option value = "Embezzlement">Embezzlement</option>
            <option value = "Public Drunkenness">Public Drunkenness</option>
           </select>
          <button onClick={() => this.submitSearch()} className="btn btn-default">
            Find My Degenerate Ancestors
            </button>
            <p>All fields required for an accurate search</p>
        </div>
      <div className="col-1"></div>
    </div>
    )
  }
}

export default SearchBar;
