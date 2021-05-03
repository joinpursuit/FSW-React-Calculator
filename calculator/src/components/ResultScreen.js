import React, { Component } from 'react'
import "./ResultScreen.css"

export default class ResultScreen extends Component {
    render() {
        const {results} = this.props
        return (
            <div className="Results">
                {results}
            </div>
        )
    }
}


//format the result function?