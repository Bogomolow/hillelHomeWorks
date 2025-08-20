
//1 завдання (1 варіант)
const count = orders.reduce((acc, order) => {
    if (acc[order.user]) {
        acc[order.user]++
    }
    else {
        acc[order.user] = 1;
    }
    return acc;
})
console.log(count);
//1 завдання (2 варіант)
const orderNewMap = new Map()

const stuff = orders.forEach((order) => {

    const name = orderNewMap.get(order.user)
    if (name) {
        orderNewMap.set(order.user, name + 1)
    }
    else {
        orderNewMap.set(order.user, 1)
    }
})
console.log(orderNewMap)



//2 завдання (1 варіант)
const value = orders.map((order) => {


    const sumPrice = order.items.reduce((value, count) => value + count.price, 0)
    return { name: order.user, total: sumPrice };
})
const newCount = value.reduce((acc, order) => {
    if (acc[order.name]) {
        acc[order.name] += order.total
    }
    else {
        acc[order.name] = order.total;
    }
    return acc;
}, {})
console.log(newCount)
                    //2 завдання (2 варіант)
const sumNewMap = new Map()

const MapPrice = orders.forEach((order) => {
    const sum = order.items.reduce((value, count) => value + count.price, 0)
    const name = sumNewMap.get(order.user) || 0;
    sumNewMap.set(order.user, sum + name)
})
console.log(sumNewMap)

// 3 завдання
const universalNewMap = new Set()

orders.forEach((order) => {
    order.items.forEach((item) => universalNewMap.add(item.name))


})
console.log(universalNewMap);

// 4 завдання
const SpentMore = orders.reduce((acc, order) => {
    const sum = order.items.reduce((value, count) => value + count.price, 0)
    if (acc[order.user]) {
        acc[order.user] += sum
    }
    else {
        acc[order.user] = sum;
    }
    return acc;


}, {})

const maxUser = Object.entries(SpentMore).reduce((order, value) => {
    if (value[1] > order[1]) {
        return value;
    }
    else {
        return order;
    }


})
console.log(` ${maxUser[0]} витратив більше всіх ${maxUser[1]} грн`);

