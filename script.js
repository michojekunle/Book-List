const form = document.querySelector('#form-book');
const list = document.querySelector('#books-listed');

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
        const books = Store;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const row = document.createElement('tr');
        
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

//Event: Add Books 

//Event: remove Books


// //Event: Remove Book
// list.addEventListener('click' (e) => {
//     UI.deleteBook(e.target);
// });


