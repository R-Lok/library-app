let bookLibrary = []

function book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${haveRead}`
    }
    console.log(this.info())
}

function addBooktoLibrary() {
    
}