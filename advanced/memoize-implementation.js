console.log('Memoize Implementation');

let inefficientFn = (num) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            total++;
        }
    }
    return total;
}

console.log('==================== Without memoization ====================');

let start = new Date();
inefficientFn(40000);

console.log('Time taken 1 - without memoization', new Date() - start);

start = new Date();
inefficientFn(40000);

console.log('Time taken 2 - without memoization', new Date() - start);

console.log('==================== With memoization ====================');

const memoize = (fn) => {
    const results = {};
    return (...args) => {
        const argsKey = JSON.stringify(args);
        if (!results[argsKey]) {
            results[argsKey] = fn(...args);
        }
        return results[argsKey];
    };
};

inefficientFn = memoize((num) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            total++;
        }
    }
    return total;
});

start = new Date();
inefficientFn(50000);

console.log('Time taken 3 - with memoization', new Date() - start);

start = new Date();
inefficientFn(50000);

console.log('Time taken 4 - with memoization', new Date() - start);
