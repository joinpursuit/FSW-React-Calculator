# Calculator
Simple calculator that allows the user to perform 5 basic mathematical functions.

## Details
With the calculator, the user can perform 5 basic math operations: Addition, Subtraction, Multiplication, Division, and Exponents. With that they can also chain those operations and create a complex equation.

## Features / Technologies
* Order of Operations: The order of operations logic was built out, as opposed to using an already built out library.
* Simplified the development process by using React to break the app into components.
* Ability to run the app using just a keyboard.

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

### Comma Placement
```
    placeCommas = (str) => {
        let res = "";
        let toSlice = "";
        let decimal = "";

        if(str[0] !== "-") {
            if(str.length > 3) {
                for(let i = 0; i < str.length; i++) {
                    if(str[i] === ".") {
                        toSlice = str.slice(0, i);
                        decimal = str.slice(i);
                        break;
                    }
                } 
            }
    
            if(!toSlice) toSlice = str;
    
            while(toSlice.length > 3) {
                let sliced = toSlice.slice(-3);
                res = "," + sliced + res;
                toSlice = toSlice.slice(0, -3);
            }
        } else {
            if(str.length > 4) {
                for(let i = 0; i < str.length; i++) {
                    if(str[i] === ".") {
                        toSlice = str.slice(0, i);
                        decimal = str.slice(i);
                    }
                } 
            }
    
            if(!toSlice) toSlice = str;
    
            while(toSlice.length > 4) {
                let sliced = toSlice.slice(-3);
                res += "," + sliced;
                toSlice = toSlice.slice(0, -3);
            }
        }


        return toSlice + res + decimal;
    } // End of placeCommas() function
```

## [How to Start](https://github.com/IsaiahCollazo99/Calculator/blob/master/calculator/README.md)
* Use these commands (linked on the above heading) with the frontend folder open in the terminal
