const posts = [
    {title: 'Post One', body: 'This is my first post'},
    {title: 'Post Two', body: 'This is my second post'}
];

const getPosts = () => {
    setTimeout(() => {
        let titles = '<ul>';
            posts.forEach((post) => {
                titles += '<li>'+post.title+'</li>';
            });
        titles += '</ul>';
        document.body.innerHTML = titles;
    }, 1000);
}

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post three', body: 'This is the third post.'}, getPosts);
// getPosts();
