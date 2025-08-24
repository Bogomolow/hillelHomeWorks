const books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949, genres: ["dystopia", "politics"] },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genres: ["fantasy", "adventure"] },
    { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, genres: ["dystopia", "sci-fi"] },
    { id: 4, title: "The Silmarillion", author: "J.R.R. Tolkien", year: 1977, genres: ["fantasy", "mythology"] }
];
const years = books.reduce((sum, book) => sum + book.year, 0)
const average = years / books.length
console.log(average)