# Pursuit-Core-Web-React-Calculator-Lab

## Simple Calculator

### Task

- You will create a React app that mimics a simple calculator
- Please use `create-react-app` to generate your project
- Break your application down to necessary components
- Your app should look, feel and work like this: [Live Example](https://wizardly-benz-647f72.netlify.com/)

### Functionality

- AC: Clears all of the data in the screen
- C: Clears only what is being displayed
- %: Converts the current value into a percentage. So just `x / 100`
- ±: Toggles between negative and positive number
- . : Adds decimal point to the current number
- Operations: Queues the operation
- Equal to: Invokes the operation to happen
- Play around with the [Live Example](https://wizardly-benz-647f72.netlify.com/)

### State

Use the following state:

```javascript
{
  displayValue: '0',
  previousValue: null,
  operation: null,
  waitingForNewValue: false
}
```

### Styling

- Center your calculator so it takes up `50%` of the screen

- You may use the following button css to get started quickly:
  ```css
  .button {
    background-color: #E0E0E6;
    font-size: 40px;
    text-align: center;
    color: #666666;
    border-left: 1px solid #666666;
    border-bottom: 1px solid #666666;
    user-select: none;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    display: block;
  }

  button:active {
    box-shadow: inset 0px 0px 80px 0px rgba(0,0,0,0.25);
  }

  .orange {
    background-color: #EE9B3E;
    color: #fff;
  }
  ```
- Try your best to make it look like the example


## Rubric

![calculatorRubric](./calculatorRubric.png)
