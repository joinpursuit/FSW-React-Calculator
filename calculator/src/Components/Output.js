import React, { Component } from "react";

class Output extends Component {
    render() {
        return (
            <div className="result" placeholder="0">
                <p>{this.props.result}</p>
            </div>
        )
    }
}
export default Output