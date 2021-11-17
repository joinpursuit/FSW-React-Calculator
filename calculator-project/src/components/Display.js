import { Component } from "react";
import "./Display.css";

class Display extends Component {
    render() {
        return(
            <div className="display">
                {this.props.data}
            </div>
        );
    }
}

export default Display; 