import React from "react"
import Solution from "./Solution"


const KeyPad = ({result, handleNum}) => {
    return (
        <section className="container">
            <Solution result={result}/>
            {/* <input type="button" onClick={this.handleOperator} className="child key10" value="AC"/>
            <input type="button" onClick={this.handleOperator} className="child key11" value="+/-"/>
            <input type="button" onClick={this.handleOperator} className="child key12" value="÷"/> */}
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key7" value="7"/>
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key8" value="8"/>
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key9" value="9"/>
            {/* <input type="button" onClick={this.handleOperator} className="child key13" value="x"/> */}
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key4" value="4"/>
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key5" value="5"/>
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key6" value="6"/>
            {/* <input type="button" onClick={this.handleOperator} className="child key14" value="-"/>
            <input type="button" onClick={this.handleOperator} className="child key15" value="+"/> */}
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key1" value="1"/>
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key2" value="2"/>
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key3" value="3"/>
            {/* <input type="button" onClick={this.handleOperator} className="child key16" value="="/> */}
            <input type="button" onClick={e => handleNum(e.target.value)} className="child key0" value="0"/>
        </section>
    )
}

export default KeyPad 