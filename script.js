// Lista de Livros
const books = [
    { id: 1, title: "O Código da Vinci", image: "action1.jpg" },
    { id: 2, title: "Jogos Vorazes", image: "action2.jpg" },
    { id: 3, title: "Missão Impossível", image: "action3.jpg" },
    { id: 4, title: "John Wick", image: "action4.jpg" }
];

// Renderizar Livros
const bookList = document.getElementById("bookList");

function displayBooks() {
    bookList.innerHTML = books.map(book => `
        <div class="book-item">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <button onclick="addToFavorites(${book.id})">Favoritar</button>
        </div>
    `).join('');
}

displayBooks();

// Buscar Livros
function searchBooks() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    bookList.innerHTML = filteredBooks.map(book => `
        <div class="book-item">
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <button onclick="addToFavorites(${book.id})">Favoritar</button>
        </div>
    `).join('');
}

// Favoritar Livros
function addToFavorites(bookId) {
    const book = books.find(b => b.id === bookId);
    alert(`${book.title} foi adicionado aos favoritos!`);
}
