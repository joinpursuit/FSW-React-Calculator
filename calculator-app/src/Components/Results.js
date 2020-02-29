import React from 'react';

class Results extends React.Component{
    state={
        num1: 0,
        num2: 0,
        equation: [],
        result: 0
    }

    
    
    
     
    render(){
        const {equation}=this.state.equation 
        const {result}=this.state.result 
        return(
            <div className="Results">
      {equation}
      {result}
0123
        </div>
        )
    }
}


export default Results;