let result = '';
for(let i = 10; i <= 20; i ++){

    result += Math.pow(i, 2) + ' ,';
}
    result = result.slice(0, -2);
    console.log(result);
    