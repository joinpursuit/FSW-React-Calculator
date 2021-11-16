import React from "react";
//button will be the button
class Button extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button className="button" onClick={()=> this.props.handleButtons(this.props.btn)}> {this.props.btn}</button>
        )
    }
}
export default Button;