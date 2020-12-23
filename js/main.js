window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Timer 
    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow)/1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            return {hours, minutes, seconds, timeRemaining};
        }

        const updateClock = () => {
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours <= 9 && timer.hours  >= 0 ? `0${timer.hours}` : timer.hours;
            timerMinutes.textContent = timer.minutes <= 9 && timer.minutes  >= 0 ? `0${timer.minutes}` : timer.minutes;
            timerSeconds.textContent = timer.seconds <= 9 && timer.seconds  >= 0 ? `0${timer.seconds}` : timer.seconds;

            if(timer.hours < 0) {
                clearInterval(interval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        
        const interval = setInterval(updateClock, 1000);
        updateClock();
    }

    countTimer('23 December 2020');

    // Menu 
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul > li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    };

    toggleMenu();

    // Popup 
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupContent = popup.querySelector('.popup-content'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close');
        let count = 100;

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                
                if (document.documentElement.clientWidth > 768) {
                    let animated = () => {
                        count--;
                        if (count >= 0) {
                            popup.style = `display: block;`
                            popupContent.style = `transform: translateY(${count}%);`
                        } else {
                            clearInterval(idInterval);
                            count = 100;
                        }
                    }

                    let idInterval = setInterval(animated, 5);
                } else {
                    popup.style = `display: block`;
                }
                
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopup();

    // Tubs 

    const tubs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++) {
                if(index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            while(target !== tabHeader) {
                if(target.classList.contains('service-header-tab')) {
                    tab.forEach((item, i) => {
                        if(item === target) {
                            toggleTabContent(i);
                        }
                    });
                    return;
                }

                target = target.parentNode;
            }
            
        });
    };

    tubs();
    
});