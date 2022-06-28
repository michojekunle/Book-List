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

//UI class
class UI {
    static displayBooks() {
        const books = Store;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#books-listed')
    }

    static removeBook() {

    }
}


//Local Storage




