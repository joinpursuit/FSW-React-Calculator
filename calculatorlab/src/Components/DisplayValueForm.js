import React from 'react'

class DisplayValueForm extends React.Component {
   
    handleClick = (e) => {
        e.preventDefault();
        return(
            this.setState({value: e.target.value})
        )
        
      }
}

export default DisplayValueForm;