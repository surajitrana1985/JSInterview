console.log('Polyfill of Apply');

const person = {
    firstName: 'Ram',
    lastName: 'Yadav'
};

function greetPerson(arg) {
    console.log(`Hi ${this.firstName} ${this.lastName}! ${arg}`);
}

greetPerson.apply(person, ['Hey']);

Function.prototype.customApply = function (refObj, ...args) {
    refObj.fn = this;
    refObj.fn(...args);
};

greetPerson.customApply(person, 'How are you?');
