import React, { Component } from 'react'
import CaseItem from './case-item'
import _ from 'lodash';

export default class CaseList extends Component {

  renderCases = (caseList) => {
    if(!caseList) {
      return <div></div>
    } else {
      console.log(this.props.caseList);
       this.props.caseList.splice(10,100);
       console.log(this.props.caseList);

    return  caseList.map((individualCase, index) => (
        <CaseItem  key={index} case={individualCase} index={index} />

      ))
    }
  }



  render() {
    console.log(this.props.caseList);
    return (
        <div className="timeline">
       {this.renderCases(this.props.caseList)}
      </div>
    )
  }
}
