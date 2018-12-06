import React, { Component } from 'react'
import CaseItem from './case-item'

export default class CaseList extends Component {
  
  renderCases = (caseList) => {
    
    return caseList[0].map(individualCase => (
      
      <CaseItem case={individualCase} />
    ))
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
