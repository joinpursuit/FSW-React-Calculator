const buttons = [
    {display: "AC", value: "clearAll", type: "feature"},
    {display: "C", value: "clearCurr", type: "feature"},
    {display: "+/-", value: "posNeg", type: "feature"},
    {display: "%", value: "percent", type: "feature"},

    {display: "1", value: "1", type: "number"},
    {display: "2", value: "2", type: "number"},
    {display: "3", value: "3", type: "number"},
    {display: "+", value: "add", type: "operation"},

    {display: "4", value: "4", type: "number"},
    {display: "5", value: "5", type: "number"},
    {display: "6", value: "6", type: "number"},
    {display: "-", value: "subtract", type: "operation"},

    {display: "7", value: "7", type: "number"},
    {display: "8", value: "8", type: "number"},
    {display: "9", value: "9", type: "number"},
    {display: "*", value: "multiply", type: "operation"},

    {display: "0", value: "0", type: "number"},
    {display: ".", value: "decimal", type: "feature"},
    {display: "=", value: "equal", type: "equal"},
    {display: "/", value: "divide", type: "operation"},
]

export default buttons;