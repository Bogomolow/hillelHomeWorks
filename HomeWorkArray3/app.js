let phones = []
let sum = 0;
for(let i = 0; i < users.length; i++){
    if(users[i].balance > 2000){
        phones.push(users[i].phone);
    }
    sum += users[i].balance;
}
console.log(phones);
console.log(sum.toFixed(2));
