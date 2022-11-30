let currendID = 0;

let listBook = null;

function structure(title, author) {
  const itemId = currendID;

  const listBooks = document.querySelector('.list-book');
  const li = document.createElement('li');
  li.id = currendID;
  const pTitleAuthor = document.createElement('p');
  pTitleAuthor.textContent = `"${title}" by ${author}`;

  const btnRemove = document.createElement('button');
  btnRemove.textContent = 'Remove';

  btnRemove.addEventListener('click', () => {
    listBook.delete(itemId);
  });

  li.append(pTitleAuthor, btnRemove);

  listBooks.append(li);
  currendID += 1;
}

class ListBooks {
  constructor() {
    this.bookcollection = [];
  }

  add(title, author) {
    const book = { id: currendID, title, author };
    this.bookcollection.push(book);
    structure(title, author);
  }

  delete(id) {
    document.getElementById(id).remove();
    this.bookcollection = this.bookcollection.filter((book) => book.id !== id);
  }
}
listBook = new ListBooks();

const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
  const title = document.getElementById('Title').value;
  const author = document.getElementById('Author').value;
  const error = document.getElementById('error');
  if (title.length === 0 || author.length === 0) {
    error.classList.remove('hidden');
    event.preventDefault();
  } else {
    error.classList.add('hidden');
    listBook.add(title, author);
  }
});

//  Add the book in the local storage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('Collection', JSON.stringify(listBook.bookcollection));
});

if (window.localStorage.getItem('Collection') !== 'undefined') {
  const list = JSON.parse(window.localStorage.getItem('Collection'));
  list.forEach((books) => {
    listBook.add(books.title, books.author);
  });
}
