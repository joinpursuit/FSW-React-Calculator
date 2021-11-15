import React, { Component } from 'react'

class Display extends Component {

    render() {
        let displaySays = this.props;
        return (
            <div className = "display">
                <p>{displaySays}</p>
            </div>
        )
    }
}

export default Display