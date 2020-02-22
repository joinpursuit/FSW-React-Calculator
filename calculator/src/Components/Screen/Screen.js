import React, {Component} from 'react';
import './../../css/Screen.css'

class Screen extends Component {
    render = () => {
        return (
            <div className="screen">{this.props.text}</div>
        )
    }
}

export default Screen;