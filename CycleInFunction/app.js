let digit;
function num(){
for( let i = 0; i < 10; i ++){
    digit = parseInt(prompt('input your number'))
    if(digit >= 100){
        break;
    }
    else {
        alert('Введи ще раз')
    }
}
return digit;
}
num();
