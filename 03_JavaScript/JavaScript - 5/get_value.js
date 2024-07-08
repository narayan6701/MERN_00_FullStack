const thread ={
    user:"narayan",
    content:"This is my first post",
    like:150,
    reposts:250,
    tags:["narayan","monika"]
};

console.log(thread.like);
console.log(thread["content"]);
console.log(thread["content"]);
console.log(thread.tags[1]);

let prop="reposts";

console.log(thread.prop);
console.log(thread[prop]);
