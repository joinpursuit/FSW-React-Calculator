import React, { Component } from "react"

export class Screen extends Component {

  render() {
    const { value } = this.props
    return (
      <div>
        <input type="text" value={value}></input>
      </div>
    );
  }
}

export default Screen
