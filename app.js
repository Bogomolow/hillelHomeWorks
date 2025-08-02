let user = parseInt(prompt('iСкільки елементів хочете добавити до масиву'));
let array = [];
for(let i = 0;  i < user; i++){
    let elements = parseInt(prompt(`input your elements ${i + 1}:`));
    array.push(elements);
}
    array.sort ((a , b) => a - b);
    array.splice(1, 3);
        console.log(array);