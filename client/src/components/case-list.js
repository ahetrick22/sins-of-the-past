import React, { Component } from 'react'
import CaseItem from './case-item'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash'

//holds all individual cases together in a list of 10 down the page
class CaseList extends Component {

  renderCases = (caseList) => {
    let sorted = null;
    if(caseList !== null) {
    sorted = _.orderBy(caseList,['decision_date'], 'asc');
    }
    //if they haven't searched yet, then show empty case list
    if(!sorted && this.props.caseSearched === false) {
      return <div></div>
    //if they get results
  }  else {
        if(sorted.length > 10){
          sorted.splice(10,100);
        }
        return sorted.map((individualCase, index) => (
            <CaseItem  key={index} case={individualCase} index={index} />
        ))
      }
    }
    //if they have searched with no results
  noResults = (caseList) => {
    if(!caseList){
      return
    }
    if((caseList.length === 0) && this.props.caseSearched === true) {
        return <div className = "main-page-side-text">Your ancestors were squeaky clean!</div>
      
    }
  }


  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        {this.noResults(this.props.caseList)}
        <div className="timeline">
       {this.renderCases(this.props.caseList)}
       </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default CaseList;
