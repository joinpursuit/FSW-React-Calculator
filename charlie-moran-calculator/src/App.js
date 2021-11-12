import React from "react";
import "./App.css";
import Banana from "/Users/carlosmoran/Documents/GitStuff/Classwork/FSW-React-Calculator/charlie-moran-calculator/src/images/Banana.mp4"

class App extends React.Component {
    state = {
        input: "",
        previousNum: "",
        currentNum: "",
        operator: "",
        banana: "off",
    };

clicky = (el) => {
    this.setState({input: this.state.input + el.target.value});
}

clickClear = () => {
    this.setState({input: ""});
}

clickNeg = () => {
    this.setState({input: Number(this.state.input) * -1});
}

clickZero = () => {
    if (this.state.input !== "") {
        this.setState({input: this.state.input + 0});
    }
}

clickDec = () => {
    if (this.state.input.indexOf(".") === -1) {
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
        operator: "divide",
    });
}

clickCalc = () => {
    if (this.state.input == ""){
        this.setState({
            input: "",
            previousNum: "",
            operator: "",
        });
    } else if (this.state.operator === "plus"){
        this.setState({
            input:Number(this.state.previousNum) + Number(this.state.input),
        });
    } else if (this.state.operator === "minus"){
        this.setState({
            input: Number(this.state.previousNum) - Number(this.state.input),
        });
    } else if (this.state.operator === "multiply"){
        this.setState({
            input: Number(this.state.previousNum) * Number(this.state.input),
        });
    } else if (this.state.operator === "divide"){
        this.setState({
            input: Number(this.state.previousNum) / Number(this.state.input),
        });
     }
};

banana = () => {
    if (this.state.banana === "on"){
        this.setState({banana: "off"});
        return(<div>
            <video autoplay loop muted style={{
                display:"none",
            }}>
                <source src={Banana} type="video/mp4" />
            </video>
        </div>);

    } else if (this.state.banana === "off"){
        this.setState({banana: "on"});
        return(<div>
            <video autoplay loop muted style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%",
                zIndex: "-1",
            }}>
                <source src={Banana} type="video/mp4" />
            </video>
        </div>);
    }
}
render(){
    const {input} = this.state;
    return (
            <div className="calculator">
                <div className="container">
                    <section id="display">
                        <div className="display">
                        </div>

                        <div className="display">
                            {new Intl.NumberFormat().format(input)}
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
                            <button className="banana" onClick={this.banana}>
                                🍌
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
                            <button className="operator" onClick={this.clickMultiply}>
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
                            <button className="operator" onClick={this.clickSubt}>
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
                            <button className="operator" onClick={this.clickAdd}>
                                +
                            </button>
                            </div>
                            
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

         );
    }
}
    
export default App;