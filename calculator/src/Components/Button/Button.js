import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super()
        this.onclick = props.onclick;
        this.text = props.text;
    }

    render = () => {
        return (
            <button onClick={() => this.onclick(this.text)}>{this.text}</button>
        )
    }
}

export default Button;