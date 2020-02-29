import React, {Component} from "react"
import "../CSS/Display.css"
class Display extends Component{
    render(){
        let {display} = this.props
        return(
            <div className="display">

            {display}

            </div>
        )
    }
}

export default Display