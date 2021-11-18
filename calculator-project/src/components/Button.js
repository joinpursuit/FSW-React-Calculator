import { Component } from "react";
import "./Button.css";

class Button extends Component {
    render() {
        return (
            <div className="button-wrapper"
                onClick= {this.props.onClick}
                data-size={this.props.size}
                data-value={this.props.value} >
                {(this.props.symbol)}
            </div>
        );
    }
}

///// BUTTON: represents each and every button on the keypad 
    
export default Button;