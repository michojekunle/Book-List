const form = document.querySelector('#form-book');

// const removeBookBtn = document.getElementById('');

//book class
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
} 

//UI class: Handle UI class
class UI {
    static displayBooks() {
        const books = Store.getBooks();
       

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const row = document.createElement('tr');
        const list = document.querySelector('#books-listed');
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td class="delete" style="background-color:blueviolet; width:40px;  color:#fff; cursor:pointer; font-weight:bolder; font-size:20px;">&times;</td>
        `;

        list.appendChild(row);
    }

    
    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const addBooks = document.querySelector('.add-books');
        const form = document.querySelector('#form-book');
        addBooks.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)

    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#ISBN').value = '';
    }

}


//Store class:handles storage
class Store {
    static getBooks() {
        let books;

        if(localStorage.getItem('books')===null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    
    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn){
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//Event: diplay Books
document.addEventListener('DOMContentLoaded', UI.displayBooks())
//Event: Add Books 
document.querySelector('#form-book').addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();

    //get form values
    const title  = document.querySelector('#title').value;
    const author  = document.querySelector('#author').value;
    const isbn  = document.querySelector('#ISBN').value;

    if  (title==='' || author==='' || isbn==='') {
        UI.showAlert('Please fill in all fields!', 'danger')
    } else 
        {
            // Instantiate book
            const book = new Book(title, author, isbn);

            //add book to UI
            UI.addBookToList(book);

            //add Book to store
            Store.addBook(book);

            //Show sucees alert
            UI.showAlert('Book Added', 'success')

            //clear fields
            UI.clearFields();
        }
})

//Event: remove Books{
document.querySelector('#books-listed').addEventListener('click', (e) => {
    UI.deleteBook(e.target)

    //remove Book from store
    Store.removeBook(e.target.previousElementSibling.textContent);    

    //Show success alert
    UI.showAlert('Book Removed', 'success')
})

