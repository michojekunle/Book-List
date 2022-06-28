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

//Store :handles storage
class Store {
    static getBooks() {
        
    }
    
    static addBook() {
        
    }

    static removeBook() {
        
    }
}



//UI class
class UI {
    static displayBooks() {
        const books = Store;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#books-listed');

        const row = document.createElement('tr');
        
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td style="background-color:red; color:red; font-size:16px;">$times;</td>
        `;

        list.appendChild(row);
    }

    static removeBook() {

    }
}


//Local Storage




