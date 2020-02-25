import React from 'react';
import Results from './Results'
import Buttons from './Buttons'

class Screen extends React.Component{
    render(){
        return(
            <div className="Screen">
                <Results/>
                <Buttons/>
            Screen div
        </div>
        )
    }
}
export default Screen;