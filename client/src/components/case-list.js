import React, { Component } from 'react'
import CaseItem from './case-item'

//holds all individual cases together in a list of 10 down the page
class CaseList extends Component {

  renderCases = (caseList) => {
    //if they haven't searched yet, then show empty case list
    if(!caseList && this.props.caseSearched === false) {
      return <div></div>
    //if they have searched with no results
  } else if(!caseList && this.props.caseSearched === true) {
      return <div className = "no-results">Your ancestors were squeaky clean!</div>
    //if they get results
    } else {
        if(this.props.caseList.length > 10){
          this.props.caseList.splice(10,100);
        }
        return  caseList.map((individualCase, index) => (
            <CaseItem  key={index} case={individualCase} index={index} />
        ))
      }
    }

  render() {
    return (
        <div className="timeline">
       {this.renderCases(this.props.caseList)}
       </div>
    )
  }
}

export default CaseList;
