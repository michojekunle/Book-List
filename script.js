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
        <td class="delete" style="background-color:red; color:red; font-size:16px;">$times;</td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
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

//Event: remove Books


// //Event: Remove Book
// list.addEventListener('click' (e) => {
//     UI.deleteBook(e.target);
// });


