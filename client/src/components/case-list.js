import React, { Component } from 'react'
import CaseItem from './case-item'

export default class CaseList extends Component {

  renderCases = (caseList) => {
    if(!caseList) {
      return <div></div>
    } else {
      console.log(this.props.caseList);
      return caseList.map(individualCase => (
        <CaseItem case={individualCase} />
      ))
    }
  }



  render() {
    console.log(this.props.caseList);
    return (
      <div>
       {this.renderCases(this.props.caseList)}
      </div>
    )
  }
}
