import React, { Component } from 'react'
import CaseItem from './case-item'

//holds all individual cases together in a list of 10 down the page
class CaseList extends Component {
  renderCases = caseList => {
    //if they haven't searched yet, then show empty case list
    if (!caseList && this.props.caseSearched === false) {
      return <div />;

      //if they get results
    } else if (this.props.caseList.length > 10) {
      this.props.caseList.splice(10, 100);
    }
    return caseList.map((individualCase, index) => (
      <CaseItem key={index} case={individualCase} index={index} />
    ));
  };
  //if they have searched with no results
  noResults = caseList => {
    if (!caseList) {
      return;
    }
    if (caseList.length === 0 && this.props.caseSearched === true) {
      return (
        <div className="no-results">Your ancestors were squeaky clean!</div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.noResults(this.props.caseList)}
        <div className="timeline">{this.renderCases(this.props.caseList)}</div>
      </div>
    );
  }
}

export default CaseList;
