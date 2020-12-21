window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Timer 
    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow)/1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            return {hours, minutes, seconds, timeRemaining};
        }

        function updateClock() {
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours <= 9 && timer.hours  >= 0 ? `0${timer.hours}` : timer.hours;
            timerMinutes.textContent = timer.minutes <= 9 && timer.minutes  >= 0 ? `0${timer.minutes}` : timer.minutes;
            timerSeconds.textContent = timer.seconds <= 9 && timer.seconds  >= 0 ? `0${timer.seconds}` : timer.seconds;

            if(timer.hours < 0) {
                clearInterval(aa);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        
        const aa = setInterval(updateClock, 1000);
    }

    countTimer('23 December 2020');
    
});