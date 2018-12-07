import React, { Component } from 'react'

const CaseItem = (props) => {


  console.log(props)


  return (

    <div className="container-c left slide-left card">
      <div className="content">
        <h2>{props.case.decision_date.slice(0,4)}</h2>
        <p><strong>{props.case.name}</strong></p>
        <p> I am a case summary </p>
      </div>
    </div>
  )
}

export default CaseItem
