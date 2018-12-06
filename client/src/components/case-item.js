import React, { Component } from 'react'

const CaseItem = (props) => {


  console.log(props)


  return (
    <div>
      <h2>Case Name: {props.case.name_abbreviation}</h2>
      <h3>Date: {props.case.decision_date}</h3>
      <a href={`${props.case.url}?format=html&full_case=true`}>Link to case</a>
      <h6>You must be a registered member to see case</h6>
    </div>
  )
}

export default CaseItem