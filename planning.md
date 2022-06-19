# When form is submitted, eventListener function that pushs form inputs as an object into the library array 

# When form is submitted, function that loops through the library array to add DOM elements if the book is not already displayed on the page
- loop needs if check if the current book object already has a DOM element on the page/the information is already present

# Button to remove individual books from the library
- button for each book, remove book using some identifier to link the array object to the dom element (HTML attribute, array position). Meaning when dom elements are created they should contain an attribute that links to the book object's position in the library array. 

# button to change read status on each individual book
- add a method on the book prototype so that each book has a method to set the read status to the opposite (read/unread)



