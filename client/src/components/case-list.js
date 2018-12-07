import React, { Component } from 'react'
import CaseItem from './case-item'
import _ from 'lodash';

export default class CaseList extends Component {

  renderCases = (caseList) => {
    if(!caseList) {
      return <div>Your ancestors are squeaky clean!</div>
    } else {
     


    if(this.props.caseList.length > 10){
       this.props.caseList.splice(10,100);
     }
      
      }

    return  caseList.map((individualCase, index) => (
        <CaseItem  key={index} case={individualCase} index={index} />
          // <p>test</p>
      ))
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
