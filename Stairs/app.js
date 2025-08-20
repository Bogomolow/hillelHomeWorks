// let ladder = {
//     step:  0,
//     up: function () { 
//         this.step++
//         return this;
//     },
//     down: function () { 
//         this.step--;
//         return this;
//     },
//     showStep: function () { 
//         console.log(this.step);
//         return this;
//     }
    
// };

// ladder.up().up().down().showStep();

let person = {
    name: "Alex",
    age: 27,
    greet: function(){
        console.log(`Привіт, мене звати ${this.name}, мені ${this.age} років`);
        return this;
    }
};
person.greet();