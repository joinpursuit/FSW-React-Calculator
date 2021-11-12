import React from "react";
import Touch from "./Touch";

class Touches extends React.Component {
    render() { 
        return (
            <React.Fragment >
                {this.props.touches.map((val,i)=> <Touch onSelectDigit={this.props.onSelectDigit} key={i} id={"touch"+i} val={val}/>)}
            
            </React.Fragment>
        );
    }
}
 
export default Touches;