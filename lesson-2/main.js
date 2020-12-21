'use strict';

let date = new Date(),
    res = document.querySelector('.res'),
    dateStop = new Date('1 January 2021').getTime(),
    dateNow = new Date().getTime(),
    timeRemaining = Math.floor((dateStop - dateNow)/(24 * 60 * 60 * 1000)),
    hours = date.getHours(),
    day = 'Доброе утро';

if (hours >= 5 && hours <= 11)
    day = 'Доброе утро';
else if (hours >= 11 && hours <= 17)
    day = 'Добрый день';
else if (hours >= 17 && hours <= 23) 
    day = 'Добрый вечер';
else if (hours >= 23 && hours <= 5) 
    day = 'Доброй ночи';

function foo() {
    if(date.getDay() === 0) {
        console.log('Сегодня: Воскресенье');
    } else if(date.getDay() === 1) {
        res.append(`${day}, Сегодня: Понедельник, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    } else if(date.getDay() === 2) {
        console.log('Сегодня: Вторник');
    } else if(date.getDay() === 3) {
        console.log('Сегодня: Среда');
    } else if(date.getDay() === 4) {
        console.log('Сегодня: Четверг');
    } else if(date.getDay() === 5) {
        console.log('Сегодня: Пятница');
    } else if(date.getDay() === 6) {
        console.log('Сегодня: Суббота');
    }
}

foo();