import React from 'react';
import { Input } from './Input';

export default class CalcDisplay extends React.Component {    
    render () {
        const {result,input} = this.props;
        return (
            <div>
                <Input input={input}/>
                <p className="Output">{result}</p>
            </div>
        )
    }
}