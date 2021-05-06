import { Component } from "react";

class Display extends Component {
  render() {
      const { answer } = this.props
    return <section className="display">
                    <p>{answer}</p>
            </section>;
  }
}

export default Display;
