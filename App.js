import React from "react";
import "./App.css";

class App extends React.Component {
    state = {
        input: "",
        previousNum: "",
        currentNum: "",
        operator: "",
    }
}

clicky = (el) => {
    this.setState({input: this.state.input + el.target.value});
}

clickClear = (el) => {
    this.setState({input: ""});
}

clickNeg = () => {
    this.setState({input: Number(this.state.input) * -1});
}

clickZero = () => {
    if (this.state.input != "") {
        this.setState({input: this.state.input + 0});
    }
}

clickDec = () => {
    if (this.state.input.indexOf(".") == -1) {
        this.setState({input: this.state.input + "."});
    }
}

clickAdd = () => {
    this.setState({
        previousNum: this.state.input,
        input: "",
        operator: "plus",
    });
}

clickSubt = () => {
    this.setState({
        previousNum: this.state.input,
        input: "",
        operator: "minus"
    });
}

clickMultiply = () => {
    this.setState({
        previousNum: this.state.input,
        input: "",
        operator: "multiply",
    });
}

clickDivide = () => {
    this.setState({
        previousNum: this.state.input,
        input: "",
        operator: "division",
    });
}

clickCalc = () => {
    if (this.state.input == ""){
        this.setState({
            input: "",
            previousNum: "",
            operator: "",
        });
    } else if (this.state.operator == "plus"){
        this.setState({
            input:Number(this.state.previousNum) + Number(this.state.input),
        });
    } else if (this.state.operator == "minus"){
        this.setState({
            input: Number(this.state.previousNum) - Number(this.state.input),
        });
    } else if (this.state.operator == "multiply"){
        this.setState({
            input: Number(this.state.previousNum) * Number(this.state.input),
        });
    } else if (this.state.operator == "divide"){
        this.setState({
            input: Number(this.state.previousNum) / Number(this.state.input),
        });
    }
};

render(){
    const {input} = this.state;
    return (
            <div className="calculator">
                <div className="container">
                    <section id="display">
                        <div className="display">
                        </div>
                        <div className="display">
                            {/*thingy go here*/}
                        </div>
                    </section>
                    <section id="btn-container">
                        <div className="row1">
                            <button onClick={this.clickClear} className="clear">
                                AC
                            </button>
                            <button onClick={this.clickNeg} className="neg">
                                +/-
                            </button>
                            <button className="percentage">
                                %
                            </button>
                            <button className="operator" onClick={this.clickDivide}>
                                /
                            </button>
                        </div>
                        <div className="row2">
                            <button onClick={this.clicky} value="7">
                                7
                            </button>
                            <button onClick={this.clicky} value="8">
                                8
                            </button>
                            <button onClick={this.clicky} value="9">
                                9
                            </button>
                            <button onClick={this.clicky} value="x">
                                x
                            </button>
                        </div>
                        <div className="row3">
                        <button onClick={this.clicky} value="4">
                                4
                            </button>
                            <button onClick={this.clicky} value="5">
                                5
                            </button>
                            <button onClick={this.clicky} value="6">
                                6
                            </button>
                            <button onClick="operator" onClick={this.clickSubt}>
                                -
                            </button>
                        </div>
                        <div className="row4">
                            <button onClick={this.clicky} value="1">
                                1
                            </button>
                            <button onClick={this.clicky} value="2">
                                2
                            </button>
                            <button onClick={this.clicky} value="3">
                                3
                            </button>
                            <button className="operator" onClick={clickAdd}>
                                +
                            </button>
                            <div className="row5">
                            <button onClick={this.clicky} value="8">
                                0
                            </button>
                            <button onClick={this.clickDec}>
                                .
                            </button>
                            <button onClick={this.clicky} value="00">
                                00
                            </button>
                            <button className="operator" onClick={this.clickCalc}>
                                =
                            </button>
                        </div>
                    </section>
                </div>
            </div>

         )
    }
    
export default app;