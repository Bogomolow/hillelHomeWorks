// Задание:
// 1/Используя map и стрелочные функции, получить массив объектов с именем и средним баллом студента.
// 2. Отфильтровать тех, у кого средний балл меньше 4.5.


const students = [
    { name: "Аня", grades: [5, 4, 4, 5] },
    { name: "Петя", grades: [3, 4, 4, 3] },
    { name: "Ира", grades: [5, 5, 5, 5] },
];
    const f = students.map((student) => {
        const sum = student.grades.reduce((count, value) => count + value, 0)
        const average = sum / student.grades.length;
        return{ name: student.name,  average: average}
    }) 
    console.log(f)

    const m = f.filter((student) => student.average < 4,5)
        console.log(m)
    
    
    

