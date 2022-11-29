let currendID = 0
class Book{
    constructor(id, title,author){
      this.id = id
      this.title = title,
      this.author = author
    }
}

class ListBooks{
    constructor(){
      this.bookcollection = []
    }
    add(title,author){
      var book = new Book(currendID, title, author);
      this.bookcollection.push(book);
      structure(title,author)
    }
    delete(id){
      document.getElementById(id).remove();
      this.bookcollection = this.bookcollection.filter((book) => book.id !== id);
    }
}


function structure(title,author){
    const itemId = currendID;

    const listBooks = document.querySelector('.list-book');
    const li = document.createElement('li');
    li.id = currendID;
    const pTitleAuthor = document.createElement('p');
    pTitleAuthor.textContent = `"${title}" by ${author}`;
    
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    
    btnRemove.addEventListener('click', () => {
      listBook.delete(itemId)
    });
        
    li.append(pTitleAuthor, btnRemove);
        
    listBooks.append(li);
    currendID += 1;
}

var button = document.querySelector("#button");

var listBook = new ListBooks()
button.addEventListener("click", () => {
  var title = document.getElementById("Title").value;
  var author = document.getElementById("Author").value;
  listBook.add(title, author)
})

//  Add the book in the local storage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('Collection', JSON.stringify(listBook.bookcollection));
});

if (window.localStorage.getItem('Collection') !== "undefined") {
  const list = JSON.parse(window.localStorage.getItem('Collection'));
  list.forEach((books) => {
    listBook.add(books.title, books.author);
  });
}
