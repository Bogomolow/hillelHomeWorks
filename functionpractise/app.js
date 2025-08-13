
// // // //                     //1 ------------Піднесення в квадрат --------------------
// // // // function square(){
// // // //     let digit = parseInt(prompt('input your number'));
// // // //     let num = Math.pow(digit, 2);
// // // //     console.log(num);
// // // // }
// // // // square();

// // //                     //2 ------------- //
// // // function isEven(){
// // //     let digit = parseInt(prompt('input your number'));
// // //     if(digit % 2 === 0){
// // //         console.log(Boolean(2));
// // //     }
// // //     else{
// // //         console.log(Boolean(0));
// // //     }
// // // }
// // // isEven();

// //     //3
// //     function greetUser(){
// //         let name = prompt('inpit your name');
// //         let age  = prompt('input your age');
// //         console.log(`Привіт, ${name}! Тобі ${age} років`);
// //     }
// //     greetUser();

// //4 
// function max(){
//     let digit1 = parseInt(prompt('input your first number'));
//     let digit2 = parseInt(prompt('input your second number'));
//     if(digit1 > digit2){
//         console.log(digit1);
//     }
//     else if(digit1 < digit2){
//         console.log(digit2);
//     }
// }
// max();

//5 
function SumArray(){
let elements = [32 , 43, 43, 43, 87, 34];
let sum = 0;    
    for(let i = 0; i < elements.length; i++){
        sum = sum + elements[i];
    }
    console.log(sum);
}
SumArray();