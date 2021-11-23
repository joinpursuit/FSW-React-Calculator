import { Component } from "react";

class Display extends Component {
    inputCommas = (num) => {
        return num.toLocaleString();
        //return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        let {result, num1, num2, displayOperator} = this.props;

        return (
            <div id="displaying-both">
                <div className = "display-calculation">{num1}{displayOperator}{num2}</div>
                <div className = "display-result">{this.inputCommas(result)}</div>
            </div>
        )
    }
}

export default Display;