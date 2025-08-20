// Реализовать метод increment, который увеличивает value на 1 каждую секунду, используя стрелочную функцию внутри 

const counter = {
    value: 0,
    increment() {
        
    // Здесь внутри вызвать setInterval с использованием стрелочной функции
        setInterval(() => {
        this.value++;
        console.log(this.value)



    },1000)
        
    }


};
counter.increment();