document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    let count = 0;

    const onResize = function (event) {
        console.log('Window size', event.target.innerWidth, ' x ', event.target.innerHeight, count++);
    };

    const throttleFn = function (callback, delay) {
        let context = this;
        let calledFlag = false;
        return function (args) {
            if (!calledFlag) {
                calledFlag = true;
                setTimeout(() => {
                    callback.apply(context, [args]);
                    calledFlag = false;
                }, delay);
            }
        };
    };

    const betterResize = throttleFn(onResize, 1000);

    window.addEventListener('resize', betterResize);
});
