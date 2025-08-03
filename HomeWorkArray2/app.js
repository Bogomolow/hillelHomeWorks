let sum = 0;
let PositiveCount = 0;
let negativeCount = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let evenPositiveSum = 0;
let oddPositiveSum = 0
let positiveProduct = 1;
let elements = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let min = elements[0];
let minIndex = 0;
let max = elements[0];
let maxIndex = 0;
for(let i = 0; i < elements.length; i++){
    if(elements[i] > 0){
        PositiveCount++;
        sum += elements[i];      
    }if(elements[i] < min){
        min = elements[i];
        minIndex = i;
    }if(elements[i] > max){
        max = elements[i];
        maxIndex = i;  
    }if(elements[i] < 0){
        negativeCount++;
    }
    if(elements[i] % 2 !== 0 && elements[i] > 0){
        oddPositiveCount++;
    }
    if(elements[i] % 2 ===0 && elements[i] > 0){
        evenPositiveCount++;
    }
    if(elements[i] > 0 && elements[i] % 2 === 0){
        evenPositiveSum += elements[i];
    }
    if(elements[i] % 2 !== 0 && elements[i] > 0){
        oddPositiveSum += elements[i];
    }if(elements[i] > 0){
        positiveProduct *= elements[i];
    }
}
console.log(`Сума додатніх елементів ${sum}, кількість: ${PositiveCount}`); 
console.log(`Мінімальний елемент: ${min}, Індекс: ${minIndex}`);
console.log(`Максимальний елемент: ${max}, Індекс: ${maxIndex}`);
console.log(`Кількість від’ємних елементів: ${negativeCount}`); 
console.log(`Кількість непарних додатніх елементів: ${oddPositiveCount}`); 
console.log(`Кількість непарних додатних елементів: ${evenPositiveCount}`); 
console.log(`Сума парних додатних елементів: ${evenPositiveSum}`);
console.log(`Сума непарних додатних елементів: ${oddPositiveSum}`);
console.log(`Добуток всіх додатних елементів: ${positiveProduct}`);

    for(let i = 0; i < elements.length; i++){
        if(elements[i] > max){
        max = elements[i];
        maxIndex = elements[i];
        }
    }
    for(let j = 0; j < elements.length; j++){
            if(j !== maxIndex){
                elements.splice(j, 1, "0");
            }
        }
        console.log(elements);
