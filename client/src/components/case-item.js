import React, { Component } from 'react'

const CaseItem = (props) => {
  let caseBody;
  if(props.case.casebody.data.opinions[0].data){
    caseBody = props.case.casebody.data.opinions[0].text;
  } else {
    caseBody = "Sorry, no case summary is available"
  }

  if (props.index % 2 == 0) {
    return (
      <div className="container-c left slide-right">
        <div className="content">
          <h2>{props.case.decision_date.slice(0,4)}</h2>
          <p><strong>{props.case.name_abbreviation}</strong></p>
          
          <p>{caseBody}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container-c right slide-left">
        <div className="content">
          <h2>{props.case.decision_date.slice(0,4)}</h2>
          <p><strong>{props.case.name_abbreviation}</strong></p>
          
          <p>{caseBody}</p>
        </div>
      </div>
    )
  }


}

export default CaseItem
