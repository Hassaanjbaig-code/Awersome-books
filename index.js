const button = document.getElementById('button');
const listBooks = document.querySelector('.list-book');
listBooks.style.listStyle = 'none';

let currendID = 0;

let collection = [];

function deleteBook(id) {
  // document.getElementById(id).remove();

  // id = index for collection list
  collection = collection.filter((book) => book.id !== id);
}

function insert(Title, Author) {
  const itemId = `book-${currendID}`;
  collection.push({ id: itemId, title: Title, author: Author });

  // Display the book dynamically
  const li = document.createElement('li');
  li.id = itemId;
  const pTitle = document.createElement('p');
  pTitle.textContent = Title;
  const pAuthor = document.createElement('p');
  pAuthor.textContent = Author;
  const btnRemove = document.createElement('button');
  btnRemove.textContent = 'Remove';

  btnRemove.addEventListener('click', () => {
    deleteBook(itemId);
  });

  const hr = document.createElement('hr');

  li.append(pTitle, pAuthor, btnRemove, hr);

  listBooks.append(li);
  currendID += 1;
}

//  Add the book in the local storage

window.addEventListener('beforeunload', () => {
  window.localStorage.setItem('Collection', JSON.stringify(collection));
});
const list = JSON.parse(window.localStorage.getItem('Collection'));
if (list !== null) {
  list.forEach((books) => {
    insert(books.title, books.author);
  });
}

button.addEventListener('click', () => {
  const Title = document.getElementById('Title');
  const Author = document.getElementById('Author');
  insert(Title.value, Author.value);
  Title.textContent = '';
  Author.textContent = '';
});
