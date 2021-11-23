// Challenge One
let logger = (text) => {
    text = "Hello Code Nation";
    console.log(`${text}`);
}

let multiplier = (a, fn) => {
    for(let i=0; i<5; i++){
        fn(a);
    }
}
console.log(multiplier("Hello", logger));


// Challenge 2
let adding = (val1, val2) => {
    return val1 + val2;
}

let sum = (a, b, fun) => {
    let total = 0;
    for(i =0; i < 5; i++){
        total += fun(a, b);
        console.log(total);
    }
    
}
console.log(sum(4,5,adding));

// Challenge Three
let myList = [1,2,3,4,5];

let multiplyBy3 = myList.map(values =>{
    return values * 3;
});
console.log(multiplyBy3);

//Challenge 4
const multiply = (a,b) => {
    return a*b;
}

const addition = (a,b) => {
    return a+b;
}

const divide = (a,b) => {
    return a/b;
}

const subtract = (a,b) => {
    return a-b;
}

const doMath = (num1) =>{
    return (num2, fn) => {
        return fn(num1, num2)
    }
}

console.log(doMath(2)(4,addition));