console.log('Polyfill of Bind');

const person = {
    firstName: 'Ram',
    lastName: 'Yadav'
};

function greetPerson(arg, additionalArgs) {
    console.log(`Hi ${this.firstName} ${this.lastName}! ${arg} ${additionalArgs}`);
}

greetPerson.bind(person, 'Hey, ')('Where are you from?');

Function.prototype.customBind = function(refObj, ...args) {
    refObj.fn = this;
    return function (...additionalArgs) {
        refObj.fn(...args, ...additionalArgs);
    }
}

greetPerson.customBind(person, 'How are you?')('Where are you from?');
