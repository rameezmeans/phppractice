//const posts = [
//    {title: 'Post One', body: 'This is my first post'},
//    {title: 'Post Two', body: 'This is my second post'}
//];

//function getPosts(){
//    let output = '';
//    posts.forEach((post)=>{
//        output += `<li>${post.title}</li>`;
//    });
//    document.body.innerHTML = output;
//}

//
//function createPost(post){
//    posts.push(post);
//}

//const posts = [
//    {title: 'Post One', body: 'This is my first post'},
//    {title: 'Post Two', body: 'This is my second post'}
//];
//
//function getPosts(){
//    setTimeout( () => {
//        let output = '';
//        posts.forEach((post)=>{
//            output += `<li>${post.title}</li>`;
//        });
//        document.body.innerHTML = output;
//    }, 1000);
//}
//
//function createPost(post){
//    setTimeout( () => {
//        posts.push(post);
//    } , 2000)
//}
//
//createPost({title: 'Post three', body: 'This is the third post'})
//getPosts()

//const posts = [
//    {title: 'Post One', body: 'This is my first post'},
//    {title: 'Post Two', body: 'This is my second post'}
//];
//
//function getPosts(){
//    setTimeout( () => {
//        let output = '';
//        posts.forEach((post)=>{
//            output += `<li>${post.title}</li>`;
//        });
//        document.body.innerHTML = output;
//    }, 1000);
//}
//
//function createPost(post, callback){
//    setTimeout( () => {
//        posts.push(post);
//        callback()
//    } , 2000)
//}
//
//createPost({title: 'Post three', body: 'This is the third post'}, getPosts)


//const posts = [
//    {title: 'Post One', body: 'This is my first post'},
//    {title: 'Post Two', body: 'This is my second post'}
//];
//
//function getPosts(){
//    setTimeout( () => {
//        let output = '';
//        posts.forEach((post)=>{
//            output += `<li>${post.title}</li>`;
//        });
//        document.body.innerHTML = output;
//    }, 1000);
//}
//
//function createPost(post){
//    
//    return new Promise((resolve, reject) => {
//        setTimeout( () => {
//        posts.push(post)
//        
//        let error = false
//        if(!error){
//            resolve('successfully resolved.')
//        }
//        else{
//            reject('Message: Something went wrong.')
//        }
//        
//    } , 2000)
//    })
//}

//createPost({title: 'Post three', body:'This is the third post.'}).then(getPosts).catch(err => console.log(err))

//const promise1 = Promise.resolve('Hello Promise')
//const promise2 = 10
//const promise3 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 1000, 'Wait until this promise is resolved.')
//})
//const createPostPromise = createPost({title: 'Post three', body:'This is the third post.'})
//
//Promise.all([createPostPromise, promise1, promise2, promise3]).then(values => {getPosts(); console.log(values);}).catch(err => console.log(err))

//const posts = [
//    {title: 'Post One', body: 'This is my first post'},
//    {title: 'Post Two', body: 'This is my second post'}
//];
//
//function getPosts(){
//    setTimeout( () => {
//        let output = '';
//        posts.forEach((post)=>{
//            output += `<li>${post.title}</li>`;
//        });
//        document.body.innerHTML = output;
//    }, 1000);
//}
//
//const createPost = (post) => {
//
//    return new Promise((resolve, reject) => {
//
//        setTimeout( () => {
//
//            posts.push(post);
//
//            const error = false;
//
//            if(!error){
//                resolve();
//            }
//            else {
//                reject('something went wrong!');
//            }
//
//        } , 2000)
//    })
//
//}
//
//async function init(){
//    await createPost({title: 'Post three', body: 'This is my third post.'});
//    getPosts();
//}
//
//init()

//const init = async () => {
//    const res = await fetch('https://jsonplaceholder.typicode.com/users');
//    const data = await res.json();
//
//    console.log(data);
//}
//
//init();

const posts = [
    {title: 'Post One', body: 'This is my first post'},
    {title: 'Post Two', body: 'This is my second post'}
];

function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

const createPost = (post) => {

    return new Promise((resolve, reject) => {

        setTimeout( () => {

            posts.push(post);

            const error = true;

            if(!error){
                resolve();
            }
            else {
                reject('something went wrong!');
            }

        } , 2000)
    })

}

async function init(){
    try {
        await createPost({title: 'Post three', body: 'This is my third post.'});
    }catch(error){
        console.log(error);
    }
    getPosts();
}

init()
