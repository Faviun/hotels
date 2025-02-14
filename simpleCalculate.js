const operations = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};

function calculate(a, b, operation) {
    console.log(operation(a, b));
}

calculate(5, 10, operations.add); //15
