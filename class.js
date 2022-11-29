class datastructure{
    constructor(title,author){
        this.Title = title,
        this.Author = author
    }
}

class dataintake{
    constructor(){
        this.bookcollection = []
    }
    added(title,author){
        let collection = [];
        
        var book = new datastructure(title,author);
        collection.push(book);
        structure(title,author)
        console.log(collection)
    }
}


function structure(title,author){
    const listBooks = document.querySelector('.list-book');
    const li = document.createElement('li');
    // li.id = itemId;
    const pTitle = document.createElement('p');
    pTitle.textContent = title;
    const pAuthor = document.createElement('p');
    pAuthor.textContent = author;
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    
    // btnRemove.addEventListener('click', () => {
        //   deleteBook(itemId);
        // });
        
        const hr = document.createElement('hr');
        
        li.append(pTitle, pAuthor, btnRemove, hr);
        
        listBooks.append(li);
        // currendID += 1;
    }
    var button = document.querySelector("#button");
    button.addEventListener("click", () => {
        var title = document.getElementById("Title").value;
        var author = document.getElementById("Author").value;
    var active = new dataintake()
    active.added(title,author)
})