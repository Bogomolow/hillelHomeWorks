const books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949, genres: ["dystopia", "politics"] },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genres: ["fantasy", "adventure"] },
    { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, genres: ["dystopia", "sci-fi"] },
    { id: 4, title: "The Silmarillion", author: "J.R.R. Tolkien", year: 1977, genres: ["fantasy", "mythology"] }
];

const old = books.reduce((OldestYear, book) => {
    if (OldestYear.year < book.year) {
        return book;
    }
    return OldestYear;
})


const young = books.reduce((youngYear, book) => {
    if (youngYear.year < book.year) {
        return youngYear;
    }
    return book;
})
console.log(`Найстаріша книга ${old.title},  Рік: ${old.year}`)
console.log(`Найновіша книга ${young.title}, Рік: ${young.year}`)
