let result = '';
for (let i = 10; i <= 20; i++) {
    result += i + ', ';
}
result = result.slice(0, -2);
console.log(result);