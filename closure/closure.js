//const name = 'Kyle'
//
//function myName(){
//    console.log(name);
//}
//
//myName();

//function outerFunction(outerVariable){
//    return function innerFunction(innerVariable){
//        console.log('outer variable: '+outerVariable)
//        console.log('inner variable: '+innerVariable)
//    }
//}
//
//const innerFunction = outerFunction('outside')
//
//innerFunction('inside')


//const person = {
//    fullName: function(){
//        return this.firstName + ' ' + this.lastName
//    }
//}
//
//const person1 = {
//    firstName: 'John',
//    lastName: 'Doe',
//}
//
//const person2 = {
//    firstName: 'Mary',
//    lastName: 'Doe',
//}
//
//console.log(person.fullName());
////
//console.log(person.fullName.call(person1));
//console.log(person.fullName.call(person2));


//const obj = {name: 'Rameez'}
//
//let greeting = function(a,b) {
//    return `${a} ${this.name}. ${b}`;
//}
//
//console.log(greeting.apply(obj, ['Hello', 'How are you?'] ))

//const numbers = [1,3,5,2,4]
//let max = Math.max.apply(null, numbers);
//console.log(max)

//const obj = {name: 'Rameez'}
//
//let greeting = function(a,b) {
//    return `${a} ${this.name}. ${b}`;
//}

//const bound = greeting.bind(obj)
//console.log(bound('Hello', 'How are you?'))












