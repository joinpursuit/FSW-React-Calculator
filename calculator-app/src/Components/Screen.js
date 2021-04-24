import React, { Component } from "react"

export class Screen extends Component {

  render() {
    const { displayValue } = this.props
    return (
      <div>
        <input type="text" readOnly value={displayValue}></input>
      </div>
    )
  }
}

export default Screen
