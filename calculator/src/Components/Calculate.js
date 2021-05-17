function add (x){
let sum = x.reduce((a,b) => a+b)
console.log(sum)
return sum
}


const calculate = {
    add,
}

export default calculate;