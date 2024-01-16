function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json)); // Call renderBooks with the JSON data
}

function renderBooks(books) {
  // Get the main element from the document
  const main = document.querySelector('main');

  // Iterate through the books and create an h2 element for each
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Call fetchBooks when the HTML document is loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});

// Export fetchBooks for testing purposes
module.exports = { fetchBooks };

