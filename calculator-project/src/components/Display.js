import { Component } from "react";

class Display extends Component {

    render() {
        return <div id="display-text">{this.props.result}</div>
    }
}

export default Display;