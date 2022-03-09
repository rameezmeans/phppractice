fetch('run.json')
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  });
    






//function linear(n){
//    
//    for(let i = 0; i <= n; i++){
//        console.log(i);
//    }
//    
//}
//
//function quadratic(n){
//    for( let i = 0; i <= n; i++ ){
//            console.log("i: "+i);
//            for( let j = 0; j <= i; j++ ){
//                console.log("j: "+j);
//            }
//    }
//}
//
//function cubic(n){
//    for( let i = 0; i <= n; i++ ){
//        console.log("i: "+i);
//            for(let j = 0; j <= i; j++ ){
//                console.log("j: "+j);
//                    for( k=0; k <= j; k++ ){
//                        console.log("k: "+k);
//                    }
//            }
//    }
//}

//let n = 10;

//linear(n);
//square(n);
//cubic(n);

//console.log(Number.MAX_SAFE_INTEGER);
//console.log(Number.MIN_SAFE_INTEGER);

//let str = 'dog';
//console.log(str.charAt(2));
//console.log(str.substr(1,2));
//console.log(str.indexOf('o'));


//let test1 = 'chicken,noodle,soup,broth';
//let test2 = test1 = 'chicken';
//let thing;

//thing = test1.split(',');
//thing = test2.split('');



//console.log(thing);

//const reversed = (str) => {
//    let r = "";
//    for (let i = str.length-1; i >= 0; i--){
//        r += str.charAt(i);
//    }
//    
//    return r;
//}

//console.log(reversed("abc"));

//const arr1 = [1,2,3]
//const arr2 = [4,5,6,...arr1];
//
//console.log(arr2);

//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//
//const sortedAges = ages.sort((a, b) => b - a);
// console.log(sortedAges);









