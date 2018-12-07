import React, { Component } from 'react'
import Truncate from "react-truncate";


class CaseItem extends Component {


  constructor(props) {
    super(props)
    this.state = {
      expanded: false,

    }
    this.toggleView = this.toggleView.bind(this)

  }
toggleView () {
  this.setState({expanded:!this.state.expanded})
}


  render() {
    

    let caseBody;
    if (this.props.case.casebody.status === "ok") {
      caseBody = this.props.case.casebody.data.opinions[0].text;
    } else {
      caseBody = "Sorry, no case summary is available"
    }

    if(!this.state.expanded && (typeof caseBody === 'string')){
      caseBody = caseBody.substring(0,500) 
    }

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
