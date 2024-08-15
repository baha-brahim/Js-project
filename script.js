window.onload = function () {
    form();
}

const myLibrary = [];
const container = document.querySelector('.main');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return 'The book ' + title + ' by ' + author + ', has ' + pages + ' pages ';
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    document.getElementById('read').checked = false;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render() {
    container.innerHTML = '';
    form();
    myLibrary.forEach(book => {
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const read = document.createElement('p');
        const add = document.createElement('button');

        container.appendChild(div);
        div.appendChild(author);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(read);
        div.appendChild(add);

        div.classList.add('book');
        title.textContent = book.title;
        author.textContent = book.info();
        read.textContent = book.read ? 'You have read it' : 'You have not read it';
        add.textContent = 'Remove';
        add.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            render();
        });
    });
}

function form() {
    const div = document.createElement('div');
    const titleLabel = document.createElement('label');
    const title = document.createElement('input');
    const authorLabel = document.createElement('label');
    const author = document.createElement('input');
    const pagesLabel = document.createElement('label');
    const pages = document.createElement('input');
    const readContainer = document.createElement('div');
    const read = document.createElement('input');
    read.type = 'checkbox';
    const readLabel = document.createElement('label');
    const add = document.createElement('button');

    container.appendChild(div);
    div.appendChild(titleLabel); titleLabel.classList.add('title');
    div.appendChild(title); title.id = 'title';
    div.appendChild(authorLabel); authorLabel.classList.add('author');
    div.appendChild(author); author.id = 'author';
    div.appendChild(pagesLabel); pagesLabel.classList.add('pages');
    div.appendChild(pages); pages.id = 'pages';
    div.appendChild(readContainer)
    div.appendChild(read); read.id = 'read';
    div.appendChild(readLabel);
    readContainer.appendChild(read);
    readContainer.appendChild(readLabel);
    div.appendChild(add);

    div.classList.add('book');
    titleLabel.textContent = 'Title';
    authorLabel.textContent = 'Author';
    pagesLabel.textContent = 'Pages';
    readLabel.textContent = 'Have your read it?';
    add.textContent = 'Add book';

    add.addEventListener('click', addBookToLibrary);
}