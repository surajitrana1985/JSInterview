for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('Problem', i);
    }, 3000);
}

for (var i = 0; i < 10; i++) {
    setTimeout(((i) => {
        return () => console.log('Solution', i);
    })(i), 3000);
}
