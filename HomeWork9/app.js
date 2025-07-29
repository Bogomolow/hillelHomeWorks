let num = parseInt(prompt('input your number'))
for(let i = 1; i < 100;  i++){

    let number = Math.pow(i, 2);
    if(number <= num){
        console.log(i);
}else{
    break;
}
    
}