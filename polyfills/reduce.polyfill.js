console.log('Polyfill of Filter');

const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reducedVal = sequence.reduce((acc, item, index, arr) => {
    acc *= item;
    return acc;
}, 10);

console.log('Using reduce: ', reducedVal);

Array.prototype.customReduce = function (callback, initValue) {
    let results = initValue;
    for (let i = 0; i < this.length; i++) {
        results = callback(results, this[i], i, this);
    }
    return results;
}

reducedVal = sequence.customReduce((acc, item, index, arr) => {
    acc *= item;
    return acc;
}, 10);

console.log('Using custom reduce: ', reducedVal);
