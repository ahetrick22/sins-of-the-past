import React, { Component } from 'react'
class CaseItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
    
    //make sure the key isn't expired
    let caseBody;
    //if we get a response with a casebody
    if (this.props.case.casebody.status === "ok") {
      caseBody = this.props.case.casebody.data.opinions[0].text;
    //if key is expired or casebody doesn't exists
    } else {
      caseBody = "Sorry, no case summary is available"
    }
    //truncates casebody for summarized view
    if(!this.state.expanded){
      caseBody = caseBody.substring(0,500) 
    }
  }
  
  //toggles between full text and truncated view
  toggleView = () => {
    this.setState({expanded:!this.state.expanded})
  }

  render() {
    //alternate left and right timeline blocks
    if (this.props.index % 2 == 0) {
      return (
        <div className="container-c left slide-right">
          <div className="content">
            <h2 className="decisionDate">{this.props.case.decision_date.slice(0, 4)}</h2>
            <hr />
            <p className="caseName"><strong>{this.props.case.name_abbreviation}</strong></p>
            <p className="courtName">{this.props.case.court.name}</p>
            <p>{caseBody}...<span className="seeMore" onClick={this.toggleView}>Toggle View</span></p>      
          </div>
        </div>
      )
    } else {
      return (
        <div className="container-c right slide-left">

          <div className="content">
            <h2 className="decisionDate">{this.props.case.decision_date.slice(0, 4)}</h2>
            <p className="caseName"><strong>{this.props.case.name_abbreviation}</strong></p>
            <p className="courtName">{this.props.case.court.name}</p>
            <p>{caseBody}...<span className="seeMore" onClick={this.toggleView}>Toggle View</span></p>
          </div>
        </div>
      )
    }
  }
}

export default CaseItem
