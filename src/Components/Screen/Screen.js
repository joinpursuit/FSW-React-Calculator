import React, {Component} from 'react';
import '../../css/Screen.css'

class Screen extends Component {
    render = () => {
        return (
            <div className="screen"><span>{this.props.text}</span></div>
        )
    }
}

export default Screen;