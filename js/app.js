const apiUrl = "http://localhost:3002/books";

const displayBooks = async () => {
  const displayElement = document.getElementById("display");
  //get request
  const data = await (await fetch(apiUrl)).json();
  data.books.forEach((book) => {
    const displayBookElement = document.createElement("div");
    let html = `<p>The book ${book.title}, is written by ${book.author}. `;

    // The innerHTML property sets or returns the HTML content (inner HTML) of an element.
    displayBookElement.innerHTML = html;
    // The appendChild() method appends a node as the last child of a node.
    displayElement.appendChild(displayBookElement);
  });
};

const submitHandler = async () => {
  event.preventDefault();
  let author = event.target.author.value;
  let title = event.target.title.value;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ title: title, author: author }),
  });
};
//attaches an event handler to the document
document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
  const createBookForm = document.getElementById("create-book");
  createBookForm.addEventListener("submit", submitHandler);
});
