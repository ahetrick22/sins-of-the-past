import React, { Component, Fragment } from 'react'

//build the search bar with input fields and the button
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

  //submit the search up to the app
  submitSearch() {
    this.props.searchFunction(this.state)
  }

  //manage the input change with local state
  onInputChange(val, inputType) {
    let tempState = Object.assign({},this.state);
    tempState[inputType]= val
    this.setState({ ...tempState })
  }

  render() {
    return (
      <Fragment>
      <div className=" row form-group">
      <div className="col-1"></div>
        <div className="search-bar input-group col">
          <input className="search-field" type = "text" value={this.state.name} onChange={event => this.onInputChange(event.target.value, "name")} placeholder="Enter Surname" />

          <input className="search-field" type = "text" value={this.state.startDate} onChange={event => this.onInputChange(event.target.value , "startDate")} placeholder="Starting Year (YYYY)" />

          <input className="search-field" type = "text" value={this.state.endDate} onChange={event => this.onInputChange(event.target.value, "endDate")} placeholder="Ending Year (YYYY)" />

          <select className="search-field" className="search-field" value={this.state.category} onChange={event => this.onInputChange(event.target.value, "category")}>
            <option value = "Piracy">Piracy</option>
            <option value = "Light Treason">Light Treason</option>
            <option value = "Murder">Murder</option>
            <option value = "Pillaging">Pillaging</option>
            <option value = "Witchcraft">Witchcraft</option>
            <option value = "Insurance Fraud">Insurance Fraud</option>
            <option value = "Tax Evasion">Tax Evasion</option>
            <option value = "Thievery">Thievery</option>
            <option value = "Hijacking">Hijacking</option>
            <option value = "Embezzlement">Embezzlement</option>
            <option value = "Public Drunkenness">Public Drunkenness</option>
            <option value = "Arson">Arson</option>
           </select>
        </div>
      <div className="col-1"></div>
    </div>
    <div className='row'>
    <div className="col-4"></div>
    <div className="col">
    <button onClick={() => this.submitSearch()} className="btn btn-default">
      Find My Degenerate Ancestors
      </button>
      <p className="main-page-text">All fields required for an accurate search</p>
    </div>
    <div className="col-4"></div>
    </div>
    </Fragment>
    )
  }
}

export default SearchBar;
