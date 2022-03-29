// Fibonacci - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ........

let fibonacci = (index) => {
    if (index < 3) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);
}

console.log('==================== Without memoization ====================');

let start = new Date();
let result = fibonacci(40);
console.log('Time taken 1 - without memoization', result, new Date() - start);

start = new Date();
result = fibonacci(40);
console.log('Time taken 2 - without memoization', result, new Date() - start);

const memoize = (fn) => {
    const result = {};
    return (...args) => {
        let argsKey = JSON.stringify(args);
        if (!result[argsKey]) {
            result[argsKey] = fn(...args);
        }
        return result[argsKey];
    };
};

const fibonacciMemoize = memoize((index) => {
    if (index < 3) {
        return 1;
    }
    return fibonacciMemoize(index - 1) + fibonacciMemoize(index - 2);
});

console.log('==================== Without memoization ====================');

start = new Date();
result = fibonacciMemoize(40);
console.log('Time taken 3 - with memoization', result, new Date() - start);

start = new Date();
result = fibonacciMemoize(40);
console.log('Time taken 4 - with memoization', result, new Date() - start);
