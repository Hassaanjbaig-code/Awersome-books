let input = document.querySelector('.form');
let Title = document.getElementById('Title');
let Author = document.getElementById('Author');
let button = document.getElementById('button');


let show = document.querySelector('.list-book');

let collection = [];
function insert() {
    let newtitle = Title.innertext
    let nameauthor = Author.innertext
    collection.push({title: newtitle, author: nameauthor});
    console.log(collection);
}

button.addEventListener("click", insert)