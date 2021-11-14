import { Component } from "react";

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			display: "",
			secondDisplay: "",
			firstInput: "",
			secondInput: "",
			clearDisplay: "AC",
			operation: "",
		};
	}

	// firstDisplay = this.state.display.replaceAll(",", "");
	//  remove all the (,) then change the string into a number then
	// and then somehow try to do the operation with the other numbers
	// the other number also has to be changed similarly

	// When you press =
	onSubmit = () => {
		let addAll = this.state.display(this.state.operation)(this.state.display);
		console.log(addAll);
		// this.setState({
		// 	display: addAll,
		// });
	};

	// which will delete everything in the input field
	backSpace = () => {
		this.setState({
			display: this.state.display.slice(0, this.state.display.length - 1),
			secondDisplay: "",
			clearDisplay: "AC",
		});
	};
	clear = () => {
		this.setState({
			display: "",
			secondDisplay: "",
			clearDisplay: "AC",
		});
	};

	numberZero = (e) => {
		let inputString = this.state.display + e.target.value;
		if (this.state.display !== "") {
			this.setState({
				display: inputString,
				clearDisplay: "C",
			});
		}
	};

	dot = (e) => {
		console.log(e.target.value);
		let inputString = this.state.display + e.target.value;
		this.setState({
			display: inputString,
			clearDisplay: "C",
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
		let inputString = this.state.display + e.target.value;
		if (this.state.display.length < 9) {
			this.setState({
				display: inputString,
				clearDisplay: "C",
			});
		}
	};

	// the percentage button
	percentageBtn = () => {
		this.setState({
			secondDisplay: this.state.display / 100,
		});
	};

	// when the operation keys are pressed
	operationKeyPressed = (e) => {
		let inputString = this.state.display + e.target.value;
		let secondInput = this.state.secondInput + e.target.value;
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
				<input
					className="display"
					placeholder="0"
					disabled
					value={this.state.secondDisplay}
				/>
				<button className="operationBtn" onClick={this.clear}>
					{this.state.clearDisplay}
				</button>
				<button className="operationBtn">+/-</button>
				<button className="operationBtn" value="%" onClick={this.percentageBtn}>
					%
				</button>
				<button
					className="operationBtn"
					value="/"
					onClick={this.operationKeyPressed}
				>
					/
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
				<button
					value="0"
					onClick={(this.numberZero, this.numberKeyPressed)}
					className="zero"
				>
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
