import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: '',
            nextDisplay: '',
            result: '',
            AC: 0
        }
    }






    render() {
        const { result } = this.state.result
        const {display} = this.state.display
        const {nextDisplay} = this.state.display
        const {AC} = this.state.display
        return (
            <div className="Results">
                
                    {AC}
                    {display}
                    {nextDisplay}
                    {result}
            
                0123
        </div>
        )
    }
}


export default Results;