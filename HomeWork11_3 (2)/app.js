let num = parseInt(prompt('input your number'))
let isPrime = true;
for(let i = 2; i <= Math.sqrt(num); i++){


if(num % i=== 0){
    isPrime = false;
    break;
}

}   
if (isPrime) {
    console.log('просте число');
} else {
    console.log('складенне число');
}