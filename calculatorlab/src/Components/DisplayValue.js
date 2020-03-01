import React from 'react'
import '../App.css'

class DisplayValue extends React.Component {
    render() {
        let {displayValue} = this.props;
        return (
            <div className="result">
                <p>{displayValue}</p>
            </div>
    )   
    }
}

export default DisplayValue;