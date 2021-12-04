//const fn1 = name => ({name: name})
//console.log(fn1('Rameez'))


//let example = 'Rameez'
//
//console.log(`Hello, ${example}. 
//How are you?`)

//let sum = (a,b) => {
//    return `sum of ${a} and ${b} will be ${a+b}.`
//}
//
//console.log(sum(4,5));


//const property = {
//    address: 'Street no 6, ABC square, XYZ.',
//    name: 'John Doe'
//}
//
//const parseHouse = (property => `${property.name} is selling a house at ${property.address}` )
//
//console.log(parseHouse(property));

const getPerson = (name, age) => ({name,getAge(){return age}})

console.log(getPerson('Rameez', 32).getAge())