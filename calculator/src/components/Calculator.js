import { Component } from "react";

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			display: "",
			secondDisplay: "0",
			firstInput: "",
			secondInputStored: "",
			clearDisplay: "AC",
			operation: "",
		};
	}

	// When you press =
	onSubmit = () => {
		console.log(this.state.display);
		let displayNum = Number(this.state.display);
		console.log(displayNum);
		try {
			this.setState({
				secondDisplay: eval(this.state.display.toString()),
			});
		} catch (err) {
			this.setState({
				secondDisplay: "ERROR",
			});
		}
	};

	// which will delete 1 by 1
	backSpace = () => {
		this.setState({
			display: this.state.display.slice(0, -1),
			secondDisplay: "0",
			clearDisplay: "AC",
			firstInput: "",
			operation: "",
			secondInputStored: "",
		});
	};

	// which will delete everything in the input field
	clear = () => {
		this.setState({
			display: "",
			secondDisplay: "0",
			clearDisplay: "AC",
			firstInput: "",
			operation: "",
			secondInputStored: "",
		});
	};

	// changing - to +
	changedOp = () => {
		this.setState({
			display: this.state.display * -1,
		});
	};

	dot = (e) => {
		if (this.state.display !== "" || this.state.display !== ".") {
			let inputString = this.state.display + e.target.value;
			this.setState({
				display: inputString,
				clearDisplay: "C",
			});
		}
	};

	// the numbers that show up in the input field
	displays = (e) => {
		this.setState({
			display: e.target.value,
		});
	};

	// Event listener for number 0
	numberZero = (e) => {
		if (this.state.display !== "") {
			let inputString = this.state.display + e.target.value;
			this.setState({
				display: inputString,
				clearDisplay: "C",
			});
		}
		if (this.state.operation === "") {
			this.setState({
				firstInput: this.state.firstInput + e.target.value,
			});
		}
	};

	// when the number keys are pressed
	numberKeyPressed = (e) => {
		let inputString = this.state.display + e.target.value;
		if (this.state.display.length < 9) {
			this.setState({
				display: inputString,
				clearDisplay: "C",
			});
		}
		if (this.state.operation === "") {
			this.setState({
				firstInput: this.state.firstInput + e.target.value,
			});
		}
		if (this.state.operation !== "") {
			this.setState({
				secondInputStored: this.state.secondInputStored + e.target.value,
				clearDisplay: "C",
				display: inputString,
			});
		}
	};

	// when the operation keys are pressed
	operationKeyPressed = (e) => {
		let inputString = this.state.display + e.target.value;
		this.setState({
			operation: e.target.value,
			display: inputString,
		});
		console.log(this.state.operation);
	};

	render() {
		return (
			<div className="calculator">
				<input
					className="inputForm "
					placeholder="0"
					onInput={this.displays}
					value={this.state.display}
					disabled
				/>
				<input className="display" disabled value={this.state.secondDisplay} />
				<button className="operationBtn" onClick={this.clear}>
					{this.state.clearDisplay}
				</button>
				<button className="operationBtn" onClick={this.changedOp}>
					+/-
				</button>
				<button
					className="operationBtn"
					value="%"
					onClick={this.operationKeyPressed}
				>
					%
				</button>
				<button
					className="operationBtn"
					value="/"
					onClick={this.operationKeyPressed}
				>
					&#247;
				</button>
				<button className="numBtn" value="7" onClick={this.numberKeyPressed}>
					7
				</button>
				<button className="numBtn" value="8" onClick={this.numberKeyPressed}>
					8
				</button>
				<button className="numBtn" value="9" onClick={this.numberKeyPressed}>
					9
				</button>
				<button
					className="operationBtn"
					value="*"
					onClick={this.operationKeyPressed}
				>
					x
				</button>
				<button className="numBtn" value="4" onClick={this.numberKeyPressed}>
					4
				</button>
				<button className="numBtn" value="5" onClick={this.numberKeyPressed}>
					5
				</button>
				<button className="numBtn" value="6" onClick={this.numberKeyPressed}>
					6
				</button>
				<button
					className="operationBtn"
					value="-"
					onClick={this.operationKeyPressed}
				>
					-
				</button>
				<button className="numBtn" value="1" onClick={this.numberKeyPressed}>
					1
				</button>
				<button className="numBtn" value="2" onClick={this.numberKeyPressed}>
					2
				</button>
				<button className="numBtn" value="3" onClick={this.numberKeyPressed}>
					3
				</button>
				<button
					className="operationBtn"
					value="+"
					onClick={this.operationKeyPressed}
				>
					+
				</button>
				<button value="0" onClick={this.numberZero} className="zero">
					0
				</button>
				<button className="operationBtn" value="." onClick={this.dot}>
					.
				</button>
				<button
					className="numBtn equals-btn"
					onClick={this.onSubmit}
					type="submit"
				>
					=
				</button>{" "}
				<button className="operationBtn" onClick={this.backSpace}>
					Del
				</button>
			</div>
		);
	}
}

export default Calculator;
