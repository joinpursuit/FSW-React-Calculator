const isOperator = (input, memory, operator) => {
    if (operator === "+") {
        this.setState({ memory: memory + Number(input)})
    } else if (operator === "-") {
        this.setState({ memory: memory - Number(input)})
    } else if (operator === "*") {
        this.setState({ memory: memory * Number(input)})
    } else if (operator === "/") {
        this.setState({ memory: memory / Number(input)})
    }
}

export default isOperator;