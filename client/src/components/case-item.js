import React, { Component } from 'react'

class CaseItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      truncated: false
    }
    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }


  render() {
    console.log(this.this.props)
    let caseBody;
    if (this.props.case.casebody) {
      caseBody = this.props.case.casebody.data.opinions[0].text;
    } else {
      caseBody = "Sorry, no case summary is available"
    }

    if (this.props.index % 2 == 0) {
      return (
        <div className="container-c left slide-right">
          <div className="content">
            <h2>{this.props.case.decision_date.slice(0, 4)}</h2>
            <p><strong>{this.props.case.name_abbreviation}</strong></p>

            <p>{caseBody}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container-c right slide-left">
          <div className="content">
            <h2>{this.props.case.decision_date.slice(0, 4)}</h2>
            <p><strong>{this.props.case.name_abbreviation}</strong></p>

            <p>{caseBody}</p>
          </div>
        </div>
      )
    }
  }
}

export default CaseItem
