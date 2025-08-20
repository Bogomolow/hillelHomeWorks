const items = [
    { name: "apple", quantity: 2, price: 30 },
    { name: "banana", quantity: 5, price: 10 },
    { name: "orange", quantity: 3, price: 20 },
];

const q = items.map((item) => {
    const total = item.quantity * item.price;
    return { ...item, total: total }
})
console.log(q);

const sumPrice = q.reduce((sum, item) => sum + item.total, 0)
console.log(sumPrice)
// Задание:

// 1. С помощью map создать новый массив, где к каждому товару добавлено поле total = quantity * price.
// 2. С помощью reduce найти общую стоимость всех товаров.