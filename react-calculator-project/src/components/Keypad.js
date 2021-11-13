import { Component } from "react";
import './Keypad.css';

class Keypad extends Component{
    constructor(){
        super();

        this.state = {
            input: '',
        }
    }

    render(){
        return(
            <div className="keypad-container">
                <div className="keypad-display">
                    <div>Result</div>
                </div>
                <div className="keypad-label">
                    <p>Calculator 8.2</p>
                </div>
                <form className="form-container">
                    <div className="keypad-controls">
                        <input id="all-clear" type="button" value="AC"/>
                        <input id="pos-neg" type="button" value="+/-"/>
                        <input id="percentage" type="button" value="%"/>
                    </div>
                    <div className="keypad-numbers">
                        <input id="one" type="button" value="1"/>
                        <input id="two" type="button" value="2"/>
                        <input id="three" type="button" value="3"/>
                        <input id="four" type="button" value="4"/>
                        <input id="five" type="button" value="5"/>
                        <input id="six" type="button" value="6"/>
                        <input id="seven" type="button" value="7"/>
                        <input id="eight" type="button" value="8"/>
                        <input id="nine" type="button" value="9"/>
                        <input id="zero" type="button" value="0"/>
                        <input id="decimalpoint" type="button" value="."/>
                    </div>
                    <div className="keypad-operators">
                        <input id="divide" type="button" value="÷"/>
                        <input id="multiply" type="button" value="x"/>
                        <input id="subtract" type="button" value="-"/>
                        <input id="add" type="button" value="+"/>
                        <input id="equals" type="submit" value="="/>
                    </div>
                </form>
                <div className="keypad-footer">
                    <br />
                </div>
            </div>
        )
    }
    
}

export default Keypad;