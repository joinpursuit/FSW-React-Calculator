import { Component } from "react";

class Keypad extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id="keypad">
            <button id="allClear" onClick={this.props.clearFunc}> AC </button>
            <button id="PosNeg" onClick={()=>this.props.PosNegFunc()}> +/- </button>
            <br/>
            <button className="operationButtons" onClick={()=>this.props.OpsFunc('/')}> / </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('7')}> 7 </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('8')}> 8 </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('9')}> 9 </button>
            <button className="operationButtons" onClick={()=>this.props.OpsFunc('*')}> X </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('4')}> 4 </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('5')}> 5 </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('6')}> 6 </button>
            <button className="operationButtons" onClick={()=>this.props.OpsFunc('-')}> - </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('1')}> 1 </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('2')}> 2 </button>
            <button className="numberButtons" onClick={()=>this.props.numberFunc('3')}> 3 </button>
            <button className="operationButtons" onClick={()=>this.props.OpsFunc('+')}> + </button>
            <br/>
            <button id="zero-button" onClick={()=>this.props.numberFunc('0')}> 0 </button>
            <br/> 
            <button id="equals-button" onClick={()=>this.props.equalsFunc()}> = </button>  
        </div>
        )
    }
}

export default Keypad