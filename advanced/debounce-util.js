document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    let count = 0;

    const searchFn = function (event) {
        console.log('Fetching...', event.target.value, count++);
    }

    const searchElem = document.getElementById('search');

    const debounceFn = function (callback, delay) {
        let context = this;
        let timer;
        return function (args) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                callback.apply(context, [args]);
            }, delay);
        };
    };

    const betterFn = debounceFn(searchFn, 1000);

    if (searchElem) {
        searchElem.addEventListener('keyup', betterFn);
    }

});
