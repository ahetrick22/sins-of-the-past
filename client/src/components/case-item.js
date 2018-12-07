import React, { Component } from 'react'

const CaseItem = (props) => {
  console.log(props.index);

  if (props.index % 2 == 0) {
    return (
      <div className="container-c left slide-right">
        <div className="content">
          <h2>{props.case.decision_date.slice(0,4)}</h2>
          <p><strong>{props.case.name}</strong></p>
          <p> I am a case summary </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container-c right slide-left">
        <div className="content">
          <h2>{props.case.decision_date.slice(0,4)}</h2>
          <p><strong>{props.case.name}</strong></p>
          <p> I am a case summary </p>
        </div>
      </div>
    )
  }


}

export default CaseItem
