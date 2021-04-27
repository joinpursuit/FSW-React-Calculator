import React, { Component } from 'react'       
//import React from 'react'

export default class Cal extends Component {
    select = e => {
        this.props.select(e.target.name);
    }
    render() {
        return (
            <div className='button'>
                 <button name= 'Clear' onClick={this.select}> Clear </button>
                 <button name= '+/-' onClick={this.select}> +/-</button>
                 <button name= '%' onClick={this.select}> % </button>
                 <button name= '/' onClick={this.select}> / </button>

                 <br/>

                <button name= '7' onClick={this.select}> 7 </button>
                <button name= '8' onClick={this.select}> 8 </button>
                <button name= '9' onClick={this.select}> 9 </button>
                <button name= '*' onClick={this.select}> * </button>
                <br/>
                <button name= '4' onClick={this.select}> 4 </button>
                <button name= '5' onClick={this.select}> 5 </button>
                <button name= '6' onClick={this.select}> 6 </button>
                <button name= '-' onClick={this.select}> - </button>
                <br/>
                <button name= '1' onClick={this.select}> 1 </button>
                <button name= '2' onClick={this.select}> 2 </button>
                <button name= '3' onClick={this.select}> 3 </button>
                <button name= '+' onClick={this.select}> + </button>    
                <br/>
                <button name= '0' onClick={this.select}> 0 </button>
                <button name= '.' onClick={this.select}> . </button>
                <button name= 'Delete' onClick={this.select}> Delete </button>
                <button name= '=' onClick={this.select}> = </button>
            
            </div>
        )
    }
}