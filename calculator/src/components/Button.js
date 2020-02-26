import React from 'react';

class Button extends React.Component {
    
    
    render() {
        return(
            <div>
                <button name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button>
                <button name="neg" onClick={e => this.props.onClick(e.target.name)}>+/-</button>
                <button name="percent" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button name="divide" onClick={e => this.props.onClick(e.target.name)}>/</button>  <br/>
                
                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="multiply" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="subtract" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="addition" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
                
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="decimal" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="equal" onClick={e => this.props.onClick(e.target.name)}>=</button><br/>
            </div>
        )
    }
}

export default Button;