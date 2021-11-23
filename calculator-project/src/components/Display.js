import { Component } from "react";

class Display extends Component {
    render() {
        let {result, num1, num2, displayOperator} = this.props;
        return (
            <div id="displaying-both">
                <div className = "display-calculation">{num1}{displayOperator}{num2}</div>
                <div className = "display-result">{result}</div>
            </div>
        )
    }
}

export default Display;