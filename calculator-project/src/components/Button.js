import { Component } from "react";

class Button extends Component {
    render() {
        return <div className = "button">{this.props.children}</div>
    }
}

export default Button;