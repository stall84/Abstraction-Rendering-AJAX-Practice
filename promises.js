// Practicing JS Promises


//const posts = [
//    {title: 'Post One', body: 'This is post one'},
//    {title: 'Post Two', body: 'This is post two'},
//    {title: 'Post Three', body: 'This is post three'},
//    {title: 'Post Four', body: 'This is post four'}
//    
//    ];
//
//function getPosts() {
//    setTimeout(() => {
//        let output = '';
//        posts.forEach((post) => {
//            output += `<li>${post.title}</li>`;
//        });
//        document.getElementById('blog-list').innerHTML = output;
//        
//    }, 3000);
//}
//
//const newPost = {title: 'Post NEW', body: 'This is the NEW post'};
//const error = false;
//
//function createPost (post) {
//    return new Promise((resolve,reject) => {
//        setTimeout(() => {
//            
//        }, 5000);
//        if (!error) {
//            resolve();
//        } else {
//            reject('Error: There was an unexplained error during promise reconcilliation');
//        }          
//    })
//    
//}
//
//createPost({title: 'New Post', body:'This is the new post'})
//    .then(getPosts);
    
let b = 1+1;
let myFirstPromise = new Promise ((resolve,reject) => {
    
    setTimeout(() => {
        if (b==3) {
        resolve("Successful af!")
            } else {
        reject("Not successful at all mfer")
                };
    },2000);
})

myFirstPromise
    .then((successMsg) => {
    console.log(`Promise fullfill was: ${successMsg}`);
})   .catch((rejectMsg) => {
    console.log(`Promise fulfillment was: ${rejectMsg}`);
})