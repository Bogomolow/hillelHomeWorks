const books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949, genres: ["dystopia", "politics"] },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genres: ["fantasy", "adventure"] },
    { id: 3, title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, genres: ["dystopia", "sci-fi"] },
    { id: 4, title: "The Silmarillion", author: "J.R.R. Tolkien", year: 1977, genres: ["fantasy", "mythology"] }
];
genreMap = new Map()
const genre = books.forEach(book => {
    book.genres.forEach(genre => {
        if (genreMap.has(genre)) {
            genreMap.get(genre).push(book.title)
        } else {
            genreMap.set(genre, [book.title])
        }
    })
})
console.log(genreMap)
