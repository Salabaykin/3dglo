'use strict';

let res = document.querySelector('.res'),
    hello = res.querySelector('.day'),
    week = res.querySelector('.week'),
    time = res.querySelector('.time'),
    newYear = res.querySelector('.new-year'),
    dateStop = new Date('1 January 2021'),
    dateNow = new Date(),
    timeRemaining = Math.floor((dateStop - dateNow)/(24 * 60 * 60 * 1000)),
    hours = dateNow.getHours(),
    timeOfDay;

week.textContent = `Сегодня: ${dateNow.toLocaleString("ru", { weekday: "long" })}`;

if (hours >= 5 && hours <= 11)
    timeOfDay = 'Доброе утро';
else if (hours >= 11 && hours <= 17)
    timeOfDay = 'Добрый день';
else if (hours >= 17 && hours <= 23) 
    timeOfDay = 'Добрый вечер';
else if (hours >= 23 && hours <= 5) 
    timeOfDay = 'Доброй ночи';

hello.textContent = `${timeOfDay}`;
const updateClock = () => {
    let date = new Date();
    time.textContent = `Текущее время ${date.toLocaleTimeString('en')}`;
};
setInterval(updateClock, 1000);
updateClock();
newYear.textContent = `До нового года осталось ${timeRemaining} дней`;