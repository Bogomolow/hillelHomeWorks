function number(){
    let f = 0;
    
    
    return function(x){
        
        return f += x;
        
    }
}   
    let sum = number();

    console.log(sum(4)); 
    console.log(sum(6)); 
    console.log(sum(10));
    console.log(sum(7));