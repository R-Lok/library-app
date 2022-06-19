
let addBookBtn = document.querySelector(".addBook")
let formPopup = document.querySelector(".form-popup")
let pageCover = document.querySelector(".cover")
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
    if (e.key === 'Escape' && formPopup.style.display === 'block') {
        formPopup.style.display = 'none'
    }
})

pageCover.addEventListener('click', function() {
    formPopup.style.display = 'none'
})

function showForm() {
    if (formPopup.style.display = 'none') {
        formPopup.style.display = 'block'
    }
}

//for development purposes, will delete in final version
document.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
})