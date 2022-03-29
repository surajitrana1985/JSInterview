console.log('Polyfill of Map');

const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sequence);

const seq1 = sequence.map(function (item, index, arr) {
    return item * 2;
});

console.log('Map function:', seq1);

Array.prototype.customMap = function (callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(callback(this[i], i, this));
    }
    return results;
}

const seq2 = sequence.customMap(function (item, index, arr) {
    return item * 3;
});

console.log('Custom Map function:', seq2);
