import React, {Component} from 'react'

class Display extends Component {


    render() {
        const {result} = this.props
        return (
            <div className='result'>
                <p>{result.toLocaleString('en-US')}</p>
            </div>
        )
    }
}

export default Display