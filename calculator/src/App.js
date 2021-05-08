import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		input: "",
		prevNum: "",
		currNum: "",
		operator: "",
		// sequence: [],
	};

	handleClick = (e) => {
		this.setState({ input: this.state.input + e.target.value });
	};

	handleAllClear = (e) => {
		this.setState({ input: "" });
	};

	handleNegPos = () => {
		this.setState({ input: Number(this.state.input) * -1 });
	};

	addZeroToInput = () => {
		if (this.state.input !== "") {
			this.setState({ input: this.state.input + 0 });
		}
	};

	decimal = () => {
		if (this.state.input.indexOf(".") === -1) {
			this.setState({ input: this.state.input + "." });
		}
	};

	add = () => {
		this.setState({
			prevNum: this.state.input,
			input: "",
			operator: "plus",
		});
	};

	subtract = () => {
		this.setState({
			prevNum: this.state.input,
			input: "",
			operator: "subtract",
		});
	};

	multiply = () => {
		this.setState({
			prevNum: this.state.input,
			input: "",
			operator: "multiply",
		});
	};

	divide = () => {
		this.setState({
			prevNum: this.state.input,
			input: "",
			operator: "divide",
		});
	};

	evaluate = () => {
		if (this.state.input === "") {
			this.setState({
				input: 0,
				prevNum: "",
				operator: "",
			});
		} else if (this.state.operator === "plus") {
			this.setState({
				input: Number(this.state.prevNum) + Number(this.state.input),
			});
		} else if (this.state.operator === "subtract") {
			this.setState({
				input: Number(this.state.prevNum) - Number(this.state.input),
			});
		} else if (this.state.operator === "multiply") {
			this.setState({
				input: Number(this.state.prevNum) * Number(this.state.input),
			});
		} else if (this.state.operator === "divide") {
			this.setState({
				input: Number(this.state.prevNum) / Number(this.state.input),
			});
		}
	};

	// add to input string
	// updateSequence = () => {
	// 	this.setState((prevState) => ({
	// 		sequence: [...prevState.sequence, this.state.input],
	// 	}));
	// };

	render() {
		const { input } = this.state;
		return (
			<div className="App">
				<div className="calc-container ">
					{/* D I S P L A Y S */}
					<section id="display">
						<div className="display">
							{/* {sequence.map((item) => {
								return <p>{item}</p>;
							})} */}
							{/* <p>This is where the sequence displays</p> */}
						</div>
						{/* add the comma to the input */}
						<div className="display">
							{new Intl.NumberFormat().format(input)}
						</div>
					</section>
					{/* B U T T O N S */}
					<section id="btn-container">
						<div className="row">
							<button onClick={this.handleAllClear} className="orange">
								AC
							</button>
							<button onClick={this.handleNegPos} className="orange">
								+/-
							</button>
							<button className="orange">%</button>
							<button className="operator" onClick={this.divide}>
								&#247;
							</button>
						</div>

						<div className="row">
							<button onClick={this.handleClick} value="7">
								7
							</button>
							<button onClick={this.handleClick} value="8">
								8
							</button>
							<button onClick={this.handleClick} value="9">
								9
							</button>
							<button className="operator" onClick={this.multiply}>
								x
							</button>
						</div>

						<div className="row">
							<button onClick={this.handleClick} value="4">
								4
							</button>
							<button onClick={this.handleClick} value="5">
								5
							</button>
							<button onClick={this.handleClick} value="6">
								6
							</button>
							<button className="operator" onClick={this.subtract}>
								-
							</button>
						</div>

						<div className="row">
							<button onClick={this.handleClick} value="1">
								1
							</button>
							<button onClick={this.handleClick} value="2">
								2
							</button>
							<button onClick={this.handleClick} value="3">
								3
							</button>
							<button className="operator" onClick={this.add}>
								+
							</button>
						</div>

						<div className="row">
							<button onClick={this.handleClick} value="0">
								0
							</button>
							<button onClick={this.decimal}>.</button>
							<button onClick={this.handleClick} value="00">
								00
							</button>
							<button className="operator" onClick={this.evaluate}>
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
