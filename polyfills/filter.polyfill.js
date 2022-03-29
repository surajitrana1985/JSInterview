console.log('Polyfill of Filter');

const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredSeq = sequence.filter(item => item > 5);

console.log('Using filter: ', filteredSeq);

Array.prototype.customFilter = function(callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            results.push(this[i]);
        }
    }
    return results;
}

filteredSeq = sequence.customFilter(item => item >= 7);
console.log('Using custom filter: ', filteredSeq);
