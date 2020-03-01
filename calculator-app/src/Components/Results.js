import React from 'react';

class Results extends React.Component{
    state={
        previousValue: 0,
        current: 0,
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