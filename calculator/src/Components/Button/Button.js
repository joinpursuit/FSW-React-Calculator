import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super()
        this.onclick = props.onclick;
        this.text = props.text;
        this.className = props.className;
    }

    render = () => {
        return (
            <button className={this.className} onClick={() => this.onclick(this.text)}>{this.text}</button>
        )
    }
}

export default Button;