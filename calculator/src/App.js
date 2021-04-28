import React from "react";
import "./App.css";
import Button from "./Components/Button";
// import Display from "./Components/Display";

class App extends React.Component {
  // s

  render() {
    // const { input } = this.state;
		return (
			<div className="App">
				<div className="calc-container">
          {/* <Display input={input}/> */}
					<Button onClick={this.handleChange} />
					{/* <Clear /> */}
				</div>
			</div>
		);
	}
}

export default App;
