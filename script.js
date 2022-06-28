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
        // const books = Store;
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '45468'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '47665'
            }
        ];

        const books = StoredBooks;

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

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#ISBN').value = '';
    }

}


//Store class:handles storage
class Store {
    static getBooks() {
        
    }
    
    static addBook() {
        
    }

    static removeBook() {
        
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

    // Instantiate book
    const book = new Book(title, author, isbn);


    //add book to UI
    UI.addBookToList(book);

    //clear fields
    UI.clearFields();
})

//Event: remove Books{
document.querySelector('#books-listed').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
})

// //Event: Remove Book
// list.addEventListener('click' (e) => {
//     UI.deleteBook(e.target);
// });


