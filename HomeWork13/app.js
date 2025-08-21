let nums = [1, 32, 5, 8, 432, 345, 7, 10];
 const even = nums.filter((value) => {
    if(value % 2 === 0){
        return value;
    }
})
    console.log(even);