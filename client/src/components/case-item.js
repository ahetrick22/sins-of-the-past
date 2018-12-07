import React, { Component } from 'react'
import Truncate from "react-truncate";


class CaseItem extends Component {

  static defaultProps = {
    lines: 15,
    more: 'Read more',
    less: 'Show less'
  }
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      truncated: false
    }
    this.handleTruncate = this.handleTruncate.bind(this);
    this.toggleLines = this.toggleLines.bind(this);
  }
  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated
      });
    }
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  }



  render() {
    const {
      children,
      more,
      less,
      lines
    } = this.props;

    const {
      expanded,
      truncated
    } = this.state;

    let caseBody;
    if (this.props.case.casebody.status === "ok") {
      caseBody = this.props.case.casebody.data.opinions[0].text;
    } else {
      caseBody = "Sorry, no case summary is available"
    }
    if (this.props.index % 2 == 0) {
      return (
        <div className="container-c left slide-right">
          <div className="content">
            <h2 className="decisionDate">{this.props.case.decision_date.slice(0, 4)}</h2>
            <p className="caseName"><strong>{this.props.case.name_abbreviation}</strong></p>
            <p className="courtName">{this.props.case.court.name}</p>
            <Truncate lines={!expanded && lines} 
            ellipsis={(<span>... <a href="#" onClick={this.toggleLines}>{more}</a></span>
              )} onTruncate={this.handleTruncate}>
              <p>{caseBody}</p>
              </Truncate>
            {!truncated && expanded && (
              <span> <a href='#' onClick={this.toggleLines}>{less}</a></span>
            )}
            
          </div>
        </div>
      )
    } else {
      return (
        <div className="container-c right slide-left">
          <div className="content">
            <h2>{this.props.case.decision_date.slice(0, 4)}</h2>
            <p><strong>{this.props.case.name_abbreviation}</strong></p>

            <p>{caseBody}</p>
          </div>
        </div>
      )
    }
  }
}



export default CaseItem
