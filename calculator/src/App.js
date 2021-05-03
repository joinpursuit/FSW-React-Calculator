import React from "react";
import "./App.css";

class App extends React.Component {
	state = { input: "", sequence: [] };

	handleClick = (e) => {
		this.setState({ input: e.target.value });
		const updateSequence = () => {
			this.setState((prevState) => ({
				sequence: [...prevState.sequence, this.state.input],
			}));
		};
	};

	handleAllClear = (e) => {
		this.setState({ input: "" });
	};

	handleNegPos = () => {
		this.setState({ input: Number(this.state.input) * -1 })
	}

	updateSequence = () => {
		this.setState((prevState) => ({
			sequence: [...prevState.sequence, this.state.input],
		}));
	};

	render() {
		const { input, sequence } = this.state;
		return (
			<div className="App">
				<div className="calc-container ">
					{/* D I S P L A Y S */}
					<section id="display">
						<div className="display">
							{sequence.map((item) => {
								return <p>{item}</p>;
							})}
							{/* <p>This is where the sequence displays</p> */}
						</div>
						<div className="display">{input}</div>
					</section>
					{/* B U T T O N S */}
					<section id="btn-container">
						<div className="row">
							<button onClick={this.handleAllClear}>AC</button>
							<button onClick={this.handleNegPos}>+/-</button>
							<button >%</button>
							<button className="operator">&#247;</button>
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
							<button className="operator">x</button>
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
							<button className="operator">-</button>
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
							<button className="operator">+</button>
						</div>

						<div className="row">
							<button onClick={this.handleClick} value="0">
								0
							</button>
							<button>.</button>
							<button onClick={this.handleClick} value="00">
								00
							</button>
							<button className="operator">=</button>
						</div>

						{/* C L E A R BUTTON */}
					</section>
				</div>
			</div>
		);
	}
}

export default App;
