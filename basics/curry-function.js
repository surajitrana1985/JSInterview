/*

const summed = function(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            }
        }
    }
}

*/


const summed = function(a) {
    return function (b) {
        if (b) {
            return summed (a + b);
        }
        return a;
    }
}

const total = summed(1)(2)(3)(4)();
console.log('Total: ', total);
