console.log('Polyfill of Call');

const person = {
    firstName: 'Ram',
    lastName: 'Yadav'
};

function greetPerson(arg) {
    console.log(`Hi ${this.firstName} ${this.lastName}! ${arg}`);
}

greetPerson.call(person, 'Hey');

Function.prototype.customCall = function (refObj, ...args) {
    refObj.fn = this;
    refObj.fn(...args);
};

greetPerson.customCall(person, 'How are you?');
