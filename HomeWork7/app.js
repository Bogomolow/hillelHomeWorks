let year = parseInt(prompt('input your year'));
let date = new Date();
let nowYear = date.getFullYear();
let age = nowYear - year;

if (year === null) {
    alert('Ви не ввели рік');
}

alert(age);
    

let city = prompt('Input your city');
const countryNames = new Intl.DisplayNames(['uk'], { type: 'region' });


if(city === "Київ"){
    
    alert(`Ти живеш у столиці  ${countryNames.of('Uk')}` );

}else if(city === "Вашингтон"){

    alert(`Ти живеш у столиці  ${countryNames.of('US')} `);

}else if(city === "Лондон"){

    alert(`Ти живеш у столиці  ${countryNames.of('GB')}` );
}else if(city === null){
    alert('Ви не ввели своє місто');

}
else {

    alert( `Ти живеш у місті ${city}`);
}

let sport = prompt('input your sport');
if(sport === 'Футбол'){
    alert('“Круто! Хочеш стати Cristiano Ronaldo? ');
}else if (sport === 'Баскетбол'){

    alert('“Круто! Хочеш стати Майкл Джордан? ');
}else if (sport === 'Шахи'){

    alert('“Круто! Хочеш стати Дин Лижень? ');
}else if(sport === null){
    alert('Ви не ввели свій спорт');

}