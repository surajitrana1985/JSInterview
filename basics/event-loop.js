console.log('Statement 1 ......');

setTimeout(() => {
    console.log('Statement 2 ......');
}, 10);

setTimeout(() => {
    console.log('Statement 3 ......');
}, 10);

new Promise((resolve, reject) => {
    resolve('Statement 4 ......');
}).then(value => {
    console.log(value);
});

console.log('Statement 5 ......');
