import { Component } from "react";
import "./Keypad.css"

class Keypad extends Component {
    render(){
        return (
            <div className="input-container">
                {this.props.children}
            </div>
        );
    }
}
/// DISPLAY: contains the display area on top////

export default Keypad; 