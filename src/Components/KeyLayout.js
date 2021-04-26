import React from 'react';

export default class KeyLayout extends React.Component {
    render () {
        return (
            <div className='CalcButtons'>
                <button>AC</button>
                <button>±</button>
                <button>%</button>
                <button>÷</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button className='ZeroKey'>0</button>
                <button>.</button>
                <button>=</button>
            </div>
        )
    }
}