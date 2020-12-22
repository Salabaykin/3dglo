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
        res.append(`${day}, Сегодня: Воскресенье, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    } else if(date.getDay() === 1) {
        res.append(`${day}, Сегодня: Понедельник, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    } else if(date.getDay() === 2) {
        res.append(`${day}, Сегодня: Вторник, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    } else if(date.getDay() === 3) {
        res.append(`${day}, Сегодня: Среда, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    } else if(date.getDay() === 4) {
        res.append(`${day}, Сегодня: Четверг, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    } else if(date.getDay() === 5) {
        res.append(`${day}, Сегодня: Пятница, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    } else if(date.getDay() === 6) {
        res.append(`${day}, Сегодня: Суббота, Текущее время ${date.toLocaleTimeString('en')}, До нового года осталось ${timeRemaining} дней`);
    }
}

foo();