import React from 'react';
import Results from './Results'
import Operators from './Operators'
import Keypad from './Keypad/Keypad'
class Screen extends React.Component{
    render(){
        return(
            <div className="Screen">
                <Results/>
                <Operators/>
                <Keypad/>
            Screen div
        </div>
        )
    }
}
export default Screen;