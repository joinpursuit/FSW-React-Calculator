import { Component } from "react";

class Display extends Component {
    render() {
        return (
            <div id="displaying-both">
                <div className = "display-calculation"></div>
                <div className = "display-result"></div>
            </div>
        )
    }
}

export default Display;