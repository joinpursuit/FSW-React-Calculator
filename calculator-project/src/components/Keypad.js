import { Component } from "react";
import Button from "./Button";
import Display from "./Display";

class Keypad extends Component {
    
    displayKeypad = (btnNames) => {
        return btnNames.map((el) => {
            return <Button handleClick = {this.handleClick}>{el}</Button>
        })
    }

    render() {
        const buttonNames = ["AC", "C", "+/-", "M",
                             1, 2, 3, "+",
                             4, 5, 6, "-",
                             7, 8, 9, "*",
                             0, ".", "=", "/"
                            ]

        return(
            /*
            <div id="keypad">
                <div id="display"><Display /></div>
                <div id="display-buttons">
                    <Button>AC</Button>
                    <Button>C</Button>
                    <Button>+/-</Button>
                    <Button>M</Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>+</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>-</Button>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button>*</Button>
                    <Button>0</Button>
                    <Button>.</Button>
                    <Button>=</Button>
                    <Button>/</Button>
                </div>
            </div>
            */
            <div id="keypad">
                <div id="display"><Display /></div>
                <div id="display-buttons">
                    {this.displayKeypad(buttonNames)}
                </div>
            </div>

        )
    }
}

export default Keypad;