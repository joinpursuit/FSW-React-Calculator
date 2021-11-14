import { Component } from "react";

class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			display: "",
			secondInput: "",
			clearDisplay: "AC",
			operation: "",
			comma: ",",
		};
	}

	// firstDisplay = this.state.display.replaceAll(",", "");

	//  remove all the (,) then change the string into a number then
	// and then somehow try to do the operation with the other numbers
	// the other number also has to be changed similarly

	// When you press =
	onSubmit = () => {
		// let addAll =
		// 	this.state.display  {this.state.operation} this.state.secondInput;
		this.setState({
			display: "",
		});
	};

	// which will delete everything in the input field
	clear = () => {
		console.log("Cleared");
		this.setState({
			display: "",
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
		if (this.state.display.length < 11) {
			this.setState({
				display: inputString,
				clearDisplay: "C",
			});
		}

		// if (this.state.display.length === 3) {
		// 	this.setState({
		// 		display: (this.state.display[1] = ","),
		// 	});
		// }
		if (this.state.display.length === 3 || this.state.display.length === 7) {
			this.setState({
				display: this.state.display + this.state.comma,
			});
		}
	};

	// the percentage button
	percentageBtn = () => {
		this.setState({
			display: this.state.display / 100,
		});
	};

	// when the operation keys are pressed
	operationKeyPressed = (e) => {
		this.setState({
			operation: e.target.value,
			display: this.state.display.replaceAll(",", ""),
		});
		console.log(this.state.operation);
	};

	render() {
		return (
			<div className="calculator">
				<input
					className="display"
					placeholder="0"
					onInput={this.displays}
					value={this.state.display}
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
				</button>
			</div>
		);
	}
}

export default Calculator;
