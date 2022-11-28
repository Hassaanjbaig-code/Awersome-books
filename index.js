let input = document.querySelector('.form');
let button = document.getElementById('button');
let listBooks = document.querySelector('.list-book');
listBooks.style.listStyle = "none"

let currendID = 0;

let collection = [];

function deleteBook(id){
  document.getElementById(id).remove()
}

function insert() {
  var Title = document.getElementById('Title').value;
  var Author = document.getElementById('Author').value;
  collection.push({title: Title, author: Author});
  console.log(collection);

  //Display the book dynamically
  let li = document.createElement('li')
  li.id = "book-"+currendID
  let pTitle = document.createElement("p")
  pTitle.textContent = Title
  let pAuthor = document.createElement('p')
  pAuthor.textContent = Author
  let btnRemove = document.createElement('button')
  btnRemove.textContent = "Remove"

  var ItemId = "book-"+currendID
  btnRemove.addEventListener('click', () => {
    deleteBook(ItemId)
  })

  let hr = document.createElement('hr')

  li.append(pTitle, pAuthor, btnRemove, hr)

  listBooks.append(li)
  currendID = currendID + 1
}

button.addEventListener("click", insert)