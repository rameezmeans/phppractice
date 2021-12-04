// function Constructor

 // var john = {
 //     name: 'John',
 //    job: 'Software Engineer',
 //    yearOfBirth: 1988
 // };
//
// var Person = function (name, job, yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }
//
// Person.prototype.calculateAge = function () {
//     return 2019 - this.yearOfBirth;
// }
//
// Person.prototype.lastName = 'Bhatti';
//
// var john = new Person('john', 'teacher', 1989);
//
//
//
// var jane = new Person('jane', 'designer', 1991);
// var mark = new Person('mark', 'retired', 1992);
//
//
// console.log(jane.hasOwnProperty('lastname'));
// console.log(jane.lastName);

 var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
 };

var john =  Object.create(personProto);  

