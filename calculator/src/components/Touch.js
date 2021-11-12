import React from "react";

class Touch extends React.Component {
    render() { 
        return <button onClick={this.props.onSelectDigit} value={this.props.val} id={this.props.id}>{this.props.val}</button>;
    }
}
 
export default Touch;