function add(a, b) {
    console.log("Inside add function")
    return a + b;
}
function multiply(a, b) {
    console.log("Inside multiply function")
    return a * b;
}
function calculate(a, b, operation) {
    console.log("Inside operation function")
    return operation(a, b);
}
console.log(calculate(4, 5, add));
console.log(calculate(4, 5, multiply));
