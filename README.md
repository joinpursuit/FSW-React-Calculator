# Pursuit-Core-Web-React-Calculator-Lab

## Overview

- You will create a React app that mimics a simple calculator
- Please use `create-react-app` to generate your project
- Break your application down to necessary components

## UI

Feel free to make the design your own.  Here are some real calculator UIs that you can use for inspiration.

<img src="./images/exampleScreenshotOne.png" alt="Example One" width="400">
<img src="./images/exampleScreenshotTwo.png" alt="Example Two" width="400">
<img src="./images/exampleScreenshotThree.png" alt="Example Three" width="400">

## Functionality

- Buttons 0-9 that can be used to input numbers
- Addition button
- Subtraction button
- Multiplication button
- Division button that support integer division
- Equals button that executes the current operation
- ± button that toggles between negative and positive numbers
- `.` button that adds a decimal point to the current number
- `%` button that converts the current value into a percentage
- Clear button to toggle between:
    - AC Clears all of the data in the screen
    - C: Clears only what is being displayed
- Chain together multiple operands
    - ex:  5 + 5 + 5
- Chain together multiple equals sign button pushes
    - ex: `5` `+` `5` `=` `=` `=` should display `20`
