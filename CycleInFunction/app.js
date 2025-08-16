for( let i = 0; i < 10; i ++){
    let digit = parseInt(prompt('input your number'));


    if(digit > 100 || isNaN(digit) || digit === 9){
        console.log(`user has entered ${digit}`);
        break;
    }else if (digit <= 100){
        console.log("enter the correct number");
    }
}

