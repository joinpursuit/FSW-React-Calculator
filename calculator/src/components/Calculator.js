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

	onSubmit = () => {
		// changing the input to a number
		const { operation, firstInput, secondInputStored } = this.state;
		let firstNumber = Number(firstInput);
		let secondNumber = Number(secondInputStored);

		let addition = firstNumber + secondNumber;
		let multiply = firstNumber * secondNumber;
		let division = firstNumber / secondNumber;
		let subtract = firstNumber - secondNumber;
		let percentage = (firstNumber * secondNumber) / 100;

		if (operation === "+") {
			this.setState({
				secondDisplay: addition,
			});
		} else if (operation === "*") {
			this.setState({
				secondDisplay: multiply,
			});
		} else if (operation === "/") {
			this.setState({
				secondDisplay: division,
			});
		} else if (operation === "-") {
			this.setState({
				secondDisplay: subtract,
			});
		} else if (operation === "%") {
			this.setState({
				secondDisplay: percentage,
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
		if (this.state.display !== "") {
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
		} else {
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
				<button value="0" onClick={this.numberKeyPressed} className="zero">
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
