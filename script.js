
const addBookBtn = document.querySelector(".addBook")
const bookContainer = document.querySelector(".book-library")
const submitBookBtn = document.querySelector(".submitBook")
const formPopup = document.querySelector(".form-popup")
const pageCover = document.querySelector(".cover")
let deleteBookBtns = document.querySelectorAll(".remove-book-button")
let bookLibrary = []
let bookId = 0 

submitBookBtn.addEventListener('click', addBooktoLibrary)

function Book(title, author, pages, haveRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.haveRead = haveRead
    this.bookId = bookId++
}

function addBooktoLibrary() {
    let title = document.querySelector("#bookName").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let haveRead = document.querySelector("#haveRead").value
    let newBook = new Book(title, author, pages, haveRead)
    bookLibrary.push(newBook)
    resetAndCloseForm()
    addBookCard()
    updateRemoveBookButtons()
}

function updateRemoveBookButtons() {
    deleteBookBtns = document.querySelectorAll(".remove-book-button")
    deleteBookBtns.forEach(node => node.addEventListener('click', function(e) {
        e.target.parentElement.remove()
    }))
}

function addBookCard() {
    for (i = 0; i < bookLibrary.length; i++) {
        if (document.querySelector(`[bookId="${i}"]`) === null) {
            let newCard = document.createElement('div')
            let title = document.createElement('p')
            title.innerText = bookLibrary[i].title
            let author = document.createElement('p')
            author.innerText = bookLibrary[i].author
            let pages = document.createElement('p')
            pages.innerText = bookLibrary[i].pages
            let haveRead = document.createElement('button')
            if (bookLibrary[i].haveRead === "on") {
                haveRead.innerText = 'Read'
            } else {
                haveRead.innerText = 'Not read'
            }
            let deleteBook = document.createElement('button')
            deleteBook.innerText = 'Remove'
            newCard.setAttribute('bookId', bookLibrary[i].bookId)
            newCard.classList.add('bookCard')
            haveRead.classList.add('book-read-status')
            deleteBook.classList.add('remove-book-button')
            bookContainer.appendChild(newCard)
            newCard.append(title, author, pages, haveRead, deleteBook)
        }
    }
}

function resetAndCloseForm() {
    document.querySelector('form').reset()
    formPopup.style.display = 'none'
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
// document.addEventListener('click', function(e) {
//     console.log(e)
//     console.log(e.target)
// })