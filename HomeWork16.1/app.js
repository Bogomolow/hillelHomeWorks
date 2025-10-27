class Student {
    constructor(name, surname, birthday, grades, array) {
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
        this.grades = grades;
        this.array = array;
    }
    getName(){
        return this.name;
    }
    getDate() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthday;
    }
    getAverageGrades() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
    present() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === null) {
                this.array[i] = true;
                return;
            }
        }
    }

    absent() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === null) {
                this.array[i] = false;
                return;
            }
        }
    }
    summary() {
        const attendance = this.grades.reduce((a, b) => a + b, 0);
        const average = attendance / this.grades.length;
        let presentCount = 0;
        let doneCount = 0;

        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === true) {
                presentCount++;
                doneCount++;
            } else if (this.array[i] === false) {
                doneCount++
            }
        }
        const averageArrendance = presentCount / doneCount;

        if (average > 90 && averageArrendance > 0.9) {
            return "Happy";
        }
        else {
            return "Cool, but could be better";
        }
    }

}
const grades1 = [1, 5, 10, 15];
const grades2 = [20, 14, 30, 60];
const grades3 = [100, 100, 100, 100];

const array1 = new Array(25).fill(null);
const array2 = new Array(25).fill(null);
const array3 = new Array(25).fill(null);

const student1 = new Student("Олексій", "Богомолов", 2007, grades1, array1);
const student2 = new Student("Artem", "Shapoval", 2006, grades2, array2);
const student3 = new Student("Bodya", "Kovalenko", 2000, grades2, array3);
//first student     
console.log(`Name: ${student1.getName()}`);
console.log(`Age: ${student1.getDate()}`);
console.log(`Average: ${student1.getAverageGrades()}`);
student1.present();
console.log(student1.array);
student1.absent();
console.log(student1.array);
console.log(`Average: ${student1.summary()}`);
//second student
console.log(`Name: ${student2.getName()}`);
console.log(`Age: ${student2.getDate()}`);
console.log(`Average: ${student2.getAverageGrades()}`);
student2.present();
console.log(student2.array);
student2.absent();
console.log(student2.array);
console.log(`Average: ${student2.summary()}`);
//third student
console.log(`Name: ${student3.getName()}`);
console.log(`Age: ${student3.getDate()}`);
console.log(`Average: ${student3.getAverageGrades()}`);
student3.present();
console.log(student3.array);
student3.absent();
console.log(student3.array);
console.log(`Average: ${student3.summary()}`);





