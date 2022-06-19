
let addBookBtn = document.querySelector(".addBook")
let bookForm = document.querySelector(".form-container")
let bookLibrary = []

function book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${haveRead}`
    }
}

function addBooktoLibrary() {
    
}

addBookBtn.addEventListener('click', showForm)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && bookForm.style.display === 'block') {
        bookForm.style.display = 'none'
    }
})

function showForm() {
    if (bookForm.style.display = 'none') {
        bookForm.style.display = 'block'
    }
}