let digit = parseInt(prompt('input your number'));
let count = 0;
let sum = 0;

for(let i = 1; i <= digit; i++){
    if(digit % i === 0){             
        console.log(i);              
        if(i % 2 === 0){             
            count++;
            sum = sum + i;                 
        }
    }

    
}

console.log('Кількість парних дільників:', count , sum);  
