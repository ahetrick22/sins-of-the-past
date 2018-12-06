import React, { Component } from 'react'
import CaseItem from './case-item'

export default class CaseList extends Component {
  
  renderCases(caseList) {
    caseList.map(individualCase => (
      <CaseItem case={individualCase} />
    ))
  }

  

  render() {
    console.log(this.props);
    return (
      <div>
        hi
      </div>
    )
  }
}
