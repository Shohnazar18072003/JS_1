const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Science Fiction",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
];

const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "C" },
  { id: 3, name: "Charlie", grade: "B" },
  { id: 4, name: "Dave", grade: "A" },
  { id: 5, name: "Eve", grade: "B" },
];

function searchBooks() {
  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const results = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery)
  );
  displayResults(results);
}

function searchStudents() {
  const searchQuery = parseInt(document.getElementById("searchInput").value);
  const results = students.filter((student) => student.id === searchQuery);
  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "Bunday najita mavjud emas !!!";
    return;
  }

  results.forEach((result) => {
    const card = document.createElement("div");
    card.classList.add("card");

    if (result.title) {
      const title = document.createElement("h3");
      title.textContent = result.title;
      card.appendChild(title);
    }

    if (result.author) {
      const author = document.createElement("p");
      author.textContent = "Author: " + result.author;
      card.appendChild(author);
    }

    if (result.year) {
      const year = document.createElement("p");
      year.textContent = "Year: " + result.year;
      card.appendChild(year);
    }

    if (result.genre) {
      const genre = document.createElement("p");
      genre.textContent = "Genre: " + result.genre;
      card.appendChild(genre);
    }

    if (result.name) {
      const name = document.createElement("h3");
      name.textContent = result.name;
      card.appendChild(name);
    }

    if (result.grade) {
      const grade = document.createElement("p");
      grade.textContent = "Grade: " + result.grade;
      card.appendChild(grade);
    }

    resultsContainer.appendChild(card);
  });
}
