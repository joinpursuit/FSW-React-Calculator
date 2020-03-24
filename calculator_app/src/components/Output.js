import React, { Component } from 'react'
import '../css/display.css'

class Output extends React.Component {
    render() {
        return (
            <div className="displayContainer">
                <div>
                <p className="result">{this.props.results} </p>
                </div>
            </div>
        )
    }
}

export default Output