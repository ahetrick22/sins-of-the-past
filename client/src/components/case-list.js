import React, { Component } from 'react'
import CaseItem from './case-item'

export default class CaseList extends Component {
  
  renderCases(caseList) {
    caseList.map(individualCase => (
      <CaseItem case={individualCase} />
    ))
  }

  

  render() {
    console.log(this.props.caseList[0][0]);
    return (
      <div>
        hi
        <CaseItem case={this.props.caseList[0][0]} />
      </div>
    )
  }
}
