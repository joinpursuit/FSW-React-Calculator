<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
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
>>>>>>> af890bc35c40bbef307f6813d98a45bf82886e68
