/////////////////////////////
//    Callback HELL V2    //
///////////////////////////

////////////////////////////////////////////////////////////////////////
//                  This will not print post 3                       //
// Because the DOM is already painted by the time createPosts runs  //
//                  Therefore we use callbacks                     //
////////////////////////////////////////////////////////////////////

const posts = [
    { title: 'post1', body: "This is post one"},
    { title: 'post2', body: "This is post two"},
]

let getPosts = () => {
    setTimeout( () => {
        let  output = '';
        posts.forEach( (post, index)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000)
}

/////////////////////////////
//      Blocking Code     //
///////////////////////////

let createPosts =(post)=> {
    setTimeout(()=> {
        posts.push(post);
    }, 2000);
}

getPosts();
createPosts({ title: 'post3', body: "This is post three"})

/////////////////////////////////
//      Non-Blocking Code     //
///////////////////////////////

// Must pass the get posts function back into the create posts function so that they run in the correct order.


// let createPosts =(post, callback)=> {
//     setTimeout(()=> {
//         posts.push(post);
//         callback();
//     }, 2000);
// }


// createPosts({ title: 'post3', body: "This is post three"}, getPosts)

