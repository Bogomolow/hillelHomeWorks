const words = ["apple", "banana", "avocado", "blueberry", "apricot"];

const firstLetter = words.filter(word => word.startsWith("a"))
console.log(firstLetter);

const q = words.reduce((acc, word) => {
    const newFirstLetter = word[0]
    if (!acc[newFirstLetter]) {
        acc[newFirstLetter] = []
    }
        acc[newFirstLetter].push(word)
    return acc





}, {})

console.log(q);

// Задание:

// 1. С помощью filter оставить только слова, начинающиеся на букву "a".
// 2. С помощью reduce сгруппировать все слова по первой букве в объект, где ключ — буква, значение — массив слов.