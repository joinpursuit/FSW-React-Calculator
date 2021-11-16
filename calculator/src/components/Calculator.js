import { Component } from "react";

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			display: "",
			secondDisplay: "",
			firstInput: "",
			secondInputStored: "",
			clearDisplay: "AC",
			operation: "",
		};
	}

	onSubmit = () => {
		const { operation, firstInput, secondInputStored } = this.state;
		let firstNumber = Number(firstInput);
		let secondNumber = Number(secondInputStored);
		let addition = firstNumber + secondNumber;
		let multiply = firstNumber * secondNumber;
		let division = firstNumber / secondNumber;
		let subtract = firstNumber - secondNumber;
		let percentage = (firstNumber / 100) * secondNumber;

		if (operation === "+") {
			this.setState({
				secondDisplay: addition.toLocaleString(),
			});
		} else if (operation === "*") {
			this.setState({
				secondDisplay: multiply.toLocaleString(),
			});
		} else if (operation === "/") {
			this.setState({
				secondDisplay: division.toLocaleString(),
			});
		} else if (operation === "-") {
			this.setState({
				secondDisplay: subtract.toLocaleString(),
			});
		} else if (operation === "%") {
			this.setState({
				secondDisplay: percentage.toLocaleString(),
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
	// the numbers that show up in the input field
	displays = (e) => {
		this.setState({
			display: e.target.value,
		});
	};

	// when the number keys are pressed
	numberKeyPressed = (e) => {
		let inputString = this.state.display;
		let inputToArray = inputString.split("");
		let theLastDigit = inputToArray[inputToArray.length - 1];
		console.log(theLastDigit);

		if (theLastDigit === "." && e.target.value === ".") {
			return;
		}

		// if the display is empty do nothing
		if (this.state.display === "" && e.target.value === "0") {
			this.setState({
				display: "",
			});
		} else if (this.state.display.length < 10) {
			this.setState({
				display: this.state.display + e.target.value,
				clearDisplay: "C",
			});
		}

		// if the operation is clicked secondInput stored other wise first Input stored
		if (this.state.operation === "") {
			this.setState({
				firstInput: this.state.firstInput + e.target.value,
			});
		} else {
			this.setState({
				secondInputStored: this.state.secondInputStored + e.target.value,
				clearDisplay: "C",
				display: this.state.display + e.target.value,
			});
		}

		// this is to clear after the secondDisplay is more then 0
		if (this.state.secondDisplay > 0) {
			this.setState({
				display: "",
				secondDisplay: "0",
				clearDisplay: "AC",
				firstInput: "",
				operation: "",
				secondInputStored: "",
			});
		}

		// for the 0. to appear when the . is clicked
		if (this.state.display === "" && e.target.value === ".") {
			this.setState({
				display: "0.",
				firstInput: "0.",
			});
		}
	};

	// when the operation keys are pressed
	operationKeyPressed = (e) => {
		if (this.state.display === "") {
			this.setState({
				display: "",
			});
		} else {
			this.setState({
				operation: e.target.value,
				display: this.state.display + e.target.value,
			});
		}

		if (this.state.secondDisplay > 0) {
			this.setState({
				display: "",
				secondDisplay: "0",
				clearDisplay: "AC",
				firstInput: "",
				operation: "",
				secondInputStored: "",
			});
		}
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
				<input
					className="display"
					placeholder="0"
					disabled
					value={this.state.secondDisplay}
				/>
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
				<button
					className="operationBtn"
					value="."
					onClick={this.numberKeyPressed}
				>
					.
				</button>
				<button
					className="numBtn equals-btn"
					onClick={this.onSubmit}
					type="submit"
				>
					=
				</button>
				<button className="operationBtn" onClick={this.backSpace}>
					Del
				</button>
			</div>
		);
	}
}

export default Calculator;
