//console.log(document);
//
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = "change the title";
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

// console.log(document.getElementById('header-title'));
//let headerTitle = document.getElementById('header-title');
////let header = document.getElementById('main-header');
// console.log(headerTitle.textContent);
// headerTitle.innerText = "Inner Text";
//console.log(headerTitle.textContent); // this will not consider inner styling of the elements ...
//console.log(headerTitle.innerText); // but this will consider inner styling of the elements like if you will put a display none then innerText will not select it ... 

// headerTitle.innerHTML = '<h3>Hello</h3>';
//// header.style.borderBottom = 'solid 3px #000000';
//
// // console.log(items);
// console.log(list_items[1].innerText);
//
// list_items[1].innerText = 'Hello 2';
// list_items[1].style.fontWeight = 'bold';
// list_items[1].style.backgroundColor = 'Yellow';
//

// let list_items = document.getElementsByClassName('list-group-item');
//
// for(let i=0; i<list_items.length; i++){
// 	list_items[i].style.backgroundColor = 'grey';
// }

// let items = document.getElementsByTagName('li');
//
// items[1].innerText = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'Yellow';
//
// for(let i=0; i<items.length; i++){
// 	items[i].style.backgroundColor = 'grey';
// }

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black';
//
// let input = document.querySelector('input');
// input.value = "hello world";
//
// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
//
// let list_item = document.querySelector('.list-group-item');
// list_item.style.color = 'red';
//
//
// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
//
// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'red';
//
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
//
// let odd = document.querySelectorAll('li:nth-child(even)');
// let even = document.querySelectorAll('li:nth-child(odd)');
//
//
// for(let i=0; i<odd.length; i++){
// 	odd[i].style.backgroundColor = 'grey';
// 	even[i].style.backgroundColor = '#ccc';
// }

// let itemList = document.querySelector('#items');
// // console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
//
//
// itemList.parentNode.style.backgroundColor = '#ccc';

//
// let itemsList = document.querySelector('#items');
// console.log(itemsList.parentElement);
// console.log(itemsList.parentElement.parentElement.parentElement);
//
//
// itemList.parentElement.style.backgroundColor = '#ccc';
//
// let itemList = document.querySelector('#items');
// itemList.children[1].style.backgroundColor = 'grey';
// itemList.firstElementChild.innerText = "Hello 1";
//
//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.innerText = "Hello 4";
//
// console.log(itemList.nextElementSibling);
//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'Yellow';

// let newDiv = document.createElement('div');
//
// newDiv.className = 'my-class';
// newDiv.id = 'my-id';
// newDiv.setAttribute('title', 'my-title');
//
// newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
//
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
//
// // console.log(newDiv);
// newDiv.style.fontSize = '20px';

// container.insertBefore(newDiv, h1);

// let button = document.getElementById('box');
//  button.addEventListener('click', buttonClick);
//
// button.addEventListener('mouseenter', runEvent);
// button.addEventListener('mouseleave', runEvent);
//
// button.addEventListener('mouseover', runEvent);
// button.addEventListener('mouseout', runEvent);
//
//
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mousedown', runEvent);

// function buttonClick(e){
// 	// console.log(e.target);
// 	// console.log(e.target.id);
// 	// console.log(e.target.className);
// 	// console.log(e.target.classList[0]);
//
// 	// console.log(e.type);
// 	// console.log(e.clientX);
//
// 	// console.log(e.offsetX);
// 	console.log(e.altKey);
// 	console.log(e.ctrlKey);
// 	console.log(e.shiftKey);
// }

// var form = document.querySelector('form');
// // select.addEventListener('change', runEvent);
// // select.addEventListener('input', runEvent);
//
// form.addEventListener('submit', runEvent);



// function runEvent(e){
// 	e.preventDefault();
// 	console.log('Event Type: '+e.type);
// 	console.log(e.target.value)
// }

// let itemInput = document.querySelector('input[type="text"]');
//// let form = document.querySelector('form');
//
// itemInput.addEventListener('keydown', runEvent);
//
// console.log(container);
//
// container.appendChild(document.createTextNode('hello'));

// let form = document.getElementById('addForm');
// let itemList = document.getElementById('items');
// let item = document.getElementById('item');
// let filter = document.querySelector('input[type="text"]');
//
//
// form.addEventListener('submit', addItem);
// itemList.addEventListener('click', deleteItem);
// filter.addEventListener('keyup', applyFilter);
//
// function addItem(e){
// 	e.preventDefault();
// 	let itemToAdd = item.value;
//    
//     if(itemToAdd != ''){
//         let itemText = document.createTextNode(itemToAdd);
//         let deleteButtonCross = document.createTextNode('X');
//         let space = document.createTextNode(' ');
//
//         let itemLi = document.createElement('li');
//         itemLi.className = 'list-group-item';
//
//         let itemDeleteButton = document.createElement('button');
//         itemDeleteButton.className = 'btn btn-danger btn-sm float-right delete';
//         itemDeleteButton.appendChild(deleteButtonCross);
//
//         itemLi.appendChild(itemText);
//         itemLi.appendChild(space);
//         itemLi.appendChild(itemDeleteButton);   
//
//         itemList.appendChild(itemLi);
//     }
//     else{
//         alert('Please add some item first');
//     }
// }
//
//
// function deleteItem(e){
//    
//     if(e.target.classList.contains('delete')){
//         let btn = e.target;
//         let li = btn.parentElement;
//         itemList.removeChild(li);
//     }
// }
//
// function applyFilter(e){
//     let filterText = e.target.value.toLowerCase();
//    
//     let items = document.getElementsByTagName('li');
//    
//     Array.from(items).forEach(function(item){
//       
//         let itemName = item.firstChild.textContent;
//        
//         if(itemName.toLowerCase().indexOf(filterText) != -1){
//             item.style.display = 'block';
//         }
//         else{
//             item.style.display = 'none';
//         }
//        
//     });
// }



//console.log('I am ready');
//
let str1 = "---(++++)----";
let str2 = "";
let str3 = "before ( middle []) after ";
let str4 = ") (";
let str5 = "<(   >)";
let str6 = "( [  <>  ()  ]  <>  )";
let str7 = " (      [)";
let str8 = "()";




//const verify = str => {
//    let flag = 1;
//    let stck = [];
//    let arr = str.split("");
//    
//    arr.forEach(character => {
//        let check = stck[stck.length-1];
//        if(character === '(' || character === '[' || character === '<'){
//            stck.push(character);
//            flag=0;
//        }
//        if(character === ')' || character === ']' || character === '>'){    
//            
//            flag = 1;
//            if(stck.length){
//                    if( (check == "(" && character == ")" ) ||  (check == "[" && character == "]" ) || (check == "<" && character == ">" )){
//                        stck.pop();
//                    }
//            }
//        }
//    });
//        
//    return stck.length? 0: flag;
//}

//varify = s => {
//    let stck = [];
//    
//    for(let i=0; i<s.length; i++){
//        let char = stck[stck.lastIndexOf -1];
//        
//        if(s[i] === "(" || s[i] === "[" || s[i] === "<"){
//            stck.push(s[i]);
//        }
//        else if( (char == "(" && s[i] == ")" ) ||  (char == "[" && s[i] == "]" ) || (char == "<" && s[i] == ">" )){
//            stck.pop();
//        }
//        else return false
//    }
//    
//    return stck.length ? false : true;
//}


//varify = str => {
//    let obj = {
//        ")": "(",
//        "]": "[",
//        ">": "<"
//    }
//    
//    let s =  [];
//    
//    for(let i = 0; i<str.length; i++){
//        if(str[i] === "(" || str[i] === "[" || str[i] === "<"){
//            s.push(str[i]);
//        }
//        else if(s[s.length - 1 ] === obj[str[i]]){
//            s.pop();
//        }
//        else return false;
//    }
//    
//    return s.length ? false : true;
//}

//console.log('1: '+str1+' '+verify(str1));
//console.log('2: '+str2+' '+verify(str2));
//console.log('3: '+str3+' '+verify(str3));
//console.log('4: '+str4+' '+verify(str4));
//console.log('5: '+str5+' '+verify(str5));
//console.log('6: '+str6+' '+verify(str6));
//console.log('8: '+str8+' '+verify(str8));
//console.log('7: '+str7+' '+verify(str7));

//console.log(((name) => 'Hi ' + name)('Jess'))


function func(s, a, b)
{
    var match_empty=/^$/ ;
    if (s.match(match_empty))
    {
        return -1;
    }
    else
    {
        var i=s.length-1;
        var aIndex=-1;
        var bIndex=-1;

        while ((aIndex==-1) && (bIndex==-1) && (i>=0))
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
        	if (s.substring(i, i+1) == b)
                bIndex=i;

        	i--;
        }
        
        console.log(bIndex);

        if (aIndex != -1)
        {
            if (bIndex == -1)
                return aIndex;
        	else
                return Math.max(aIndex, bIndex);
        }
        else
        {
            if (bIndex != -1)
                return bIndex;       
	      else
                return -1;
        }
    }
};

const fun_modified = (s,a,b) => {
    var match_empty=/^$/;
    if(s.match(match_empty)) return -1; 
    let i=s.length-1, aIndex=-1, bIndex=-1; 
    while((aIndex==-1) && (bIndex==-1) && (i>=0)){
        if (s.substring(i, i+1) == a) aIndex=i;
        if (s.substring(i, i+1) == b) bIndex=i;
        i--;
    }
     console.log(bIndex);
    const result = (aIndex != -1) ? (bIndex == -1) ?  aIndex :  Math.max(aIndex, bIndex) : (bIndex != -1) ?  bIndex :  -1
    return result;
};

//const fun_modified = (s,a,b) => {
//    var match_empty=/^$/;
//    if(s.match(match_empty)) return -1; 
//    let i=s.length-1, aIndex=-1, bIndex=-1; 
//    while((aIndex==-1) && (bIndex==-1) && (i>=0)){((s.substring(i, i+1) == a)) ? aIndex=i : bIndex=i;i--;}
//    const result = (aIndex != -1) ? (bIndex == -1) ?  aIndex :  Math.max(aIndex, bIndex) : (bIndex != -1) ?  bIndex :  -1
//    return result;
//};



console.log(func('abcde', 'g', 'h'));
//console.log(fun_modified('abcdef', 'a', 'e'));
console.log(fun_modified('abcdef', 'g', 'h'));
