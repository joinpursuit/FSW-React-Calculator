import React, { Component } from "react";

class Output extends Component {
    render() {
        return (
            <div className="result">
                <input className="inputscreen" placeholder="0" value={this.props.result} />
            </div>
        )
    }
}
export default Output