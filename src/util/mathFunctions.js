const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const exponent = (num1, num2) => Math.pow(num1, num2)

export default {
    "+": () => add,
    "-": () => subtract,
    "*": () => multiply,
    "/": () => divide,
    "^": () => exponent
}