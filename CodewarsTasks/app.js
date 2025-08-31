const array = [2, 32, 5, 432];

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] / array.length
    }
    console.log(sum)
}
findAverage(array)


