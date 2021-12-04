//var names = ['Rameez', 'Bilal', 'Talha', 'Usman', 'Nawaz', 'Mudassar'];
//var names = new Array('Rameez', 'Bilal', 'Talha', 'Usman', 'Nawaz', 'Mudassar');
//var numbers = [1,2,2,3,4,4,5]
//
//numbers.shift();
//numbers.shift();
//numbers.shift();
//console.log(numbers);

var a = 'a';

var b = first();

function first(){
    var b = 'b';
    
    
    console.log('before: '+b);
    b = second(b);
    console.log('after: '+b);
    
    return b;

}

function second(b){
    
    var c = 'c';
    b = 'c';
    return b;
    
//    console.log(a + b + c);
}

console.log(b);

//var john = {
//    
//    'name': 'John',
//    'yearOfBirth': 20,
//    'calculateAge': function(){
//        
//        console.log(this);
//        
//        function check(){
//            console.log(this);
//        }
//        check();
//    }
//};
//
//console.log(john.calculateAge());