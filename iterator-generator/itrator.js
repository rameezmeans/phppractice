function createIterator( array ){
    
    let currentIndex = 0;
    
    return {
        next(){
           return currentIndex < array.length 
               ? { value: array[ currentIndex++ ], done: false } 
               : { done: true } 
        }
    };
    
}

const testArray =  ['hello', 'world']
const iterator = createIterator(testArray)

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

function *gen(){
    let i = 1
    
    while(true){
        yield i;
        i *= 2
    }
}

const generator = gen()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())


function *fibonacci(){
    let a = 0;
    let b = 1;
    
    while(true){
        let current = a;
        a=b;
        b= current + a;
        yield current;
    }
}

const fib = fibonacci();

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());