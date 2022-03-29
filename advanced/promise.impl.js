const promise = new Promise((res, rej) => {
    res(10);
}).then(val => {
    console.log('Step 1', val);
    return val * 2;
}).then(val => {
    console.log('Step 2', val);
    return val * 3;
}).then(val => {
    console.log('Step 3', val);
    return val * 4;
}).finally(val => {
    console.log('Step 4', val);
    return val * 4;
}).then(val => {
    console.log('Step 5', val);
    return val * 5;
});
