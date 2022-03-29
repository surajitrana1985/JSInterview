class CustomPromise {

    isResolved = false;
    resolvedValue;
    resolvedChain = [];

    rejectedValue;
    isRejected = false;
    rejectedChain = [];

    constructor(executor) {

        const resolve = (value) => {
            this.resolvedValue = value;
            this.isResolved = true;
            if (this.resolvedChain.length) {
                this.resolvedChain.reduce((acc, fn) => {
                    return fn(acc);
                }, this.resolvedValue);
            }
        };

        const reject = (value) => {
            this.rejectedValue = value;
            this.isRejected = true;
            if (this.rejectedChain.length) {
                this.rejectedChain.reduce((acc, fn) => {
                    return fn(acc);
                }, this.rejectedValue);
            }
        };

        executor(resolve, reject);
    }

    then = (fn) => {
        this.resolvedChain.push(fn);
        if (this.isResolved) {
            this.resolvedChain.reduce((acc, fn) => {
                return fn(acc);
            }, this.resolvedValue);
        }
        return this;
    }

    catch = (fn) => {
        this.rejectedChain.push(fn);
        if (this.isRejected) {
            this.rejectedChain.reduce((acc, fn) => {
                return fn(acc);
            }, this.rejectedValue);
        }
        return this;
    }

    finally = (fn) => {
        this.resolvedChain.push(fn);
        this.rejectedChain.push(fn);
        if (this.isResolved) {
            this.resolvedChain.reduce((acc, fn) => {
                return fn(acc);
            }, this.resolvedValue);
        }
        if (this.isRejected) {
            this.rejectedChain.reduce((acc, fn) => {
                return fn(acc);
            }, this.rejectedValue);
        }
    }

}

new CustomPromise((resolve, reject) => {
    // resolve(20);
    setTimeout(() => {
        reject('Error 1');
        reject('Error 2');
        // resolve(20);
    }, 4000);
}).then(value => {
    console.log(value);
    return value * 2;
}).then(value => {
    console.log(value);
    return value * 3;
}).catch(error => {
    console.log(error);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('Inside Finally');
});


new Promise((resolve) => {
    resolve(10);
}).then(value => {
    console.log(value);
});
