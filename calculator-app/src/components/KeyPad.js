import React, { Component } from 'react'

class KeyPad extends Component {


    render() {
        return (
            < div>
                <div className="calcButtons">

                <div className="additional-function-buttons">
                        <button name="x" onClick={event => this.props.onClick(event.target.name)}> x </button>
                        <button name="+" onClick={event => this.props.onClick(event.target.name)}> + </button>
                        <button name="-" onClick={event => this.props.onClick(event.target.name)}> - </button>
                        <button name="/" onClick={event => this.props.onCick(event.target.name)}> / </button>
                    </div>

                    <button name="1" onClick={event => this.props.onClick(event.target.name)}> 1 </button>
                    <button name="2" onClick={event => this.props.onClick(event.target.name)}> 2 </button>
                    <button name="3" onClick={event => this.props.onClick(event.target.name)}> 3 </button>
                    <button name="4" onClick={event => this.props.onClick(event.target.name)}> 4 </button>
                    <br />
                    <button name="5" onClick={event => this.props.onClick(event.target.name)}> 5 </button>
                    <button name="6" onClick={event => this.props.onClick(event.target.name)}> 6 </button>
                    <button name="7" onClick={event => this.props.onClick(event.target.name)}> 7 </button>
                    <button name="8" onClick={event => this.props.onClick(event.target.name)}> 8 </button>
                    <br />
                    <button name="9" onClick={event => this.props.onClick(event.target.name)}> 9 </button>
                    <button name="0" onClick={event => this.props.onClick(event.target.name)}> 0 </button>

                    <button name="+/-" id="negative-positive" onClick={event => this.props.onCick(event.target.name)}> +/- </button>    
                    <button name="Clear" id="clear-bttn" onClick={event => this.props.onClick(event.target.name)}> Clear </button>
                    <br />

    

                    
                 


                    <div className="calculate-button">
                        <button name="=" onClick={event => this.props.onClick(event.target.name)}> = </button>
                    </div>

                </div>
</div>
                )
    }
}

                export default KeyPad