# Calculator
Simple calculator that allows the user to perform 5 basic mathematical functions.

## Details
With the calculator, the user can perform 5 basic math operations: Addition, Subtraction, Multiplication, Division, and Exponents. With that they can also chain those operations and create a complex equation.

## Features
* Order of Operations: The order of operations logic was built out, as opposed to using an already built out library.
* Simplified the development process by using React to break the app into components.
* Added functionality to run the app using just a keyboard.

## Logic
### Order of Operations 
```
findOperation = async (targetOperations, operations, operands) => {
        let i = 0;
        while(i < operations.length) {
            let operation = operations[i];
            let firstOperand = operands[i];
            let secondOperand = operands[i + 1];

            if(operation === targetOperations[0] || operation === targetOperations[1]) {
                let res = await this.findMathFunction(operation)(Number(firstOperand), Number(secondOperand));
                operands.splice(i, 2, res);
                operations.splice(i, 1);
            } else {
                i++;
            }
        }
    } // End of findOperation() function 
```

## [How to Start](https://github.com/IsaiahCollazo99/Calculator/blob/master/calculator/README.md)
* Use these commands with the frontend folder open in the terminal
