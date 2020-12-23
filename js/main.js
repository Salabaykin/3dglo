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

    countTimer('25 December 2020');

    // Menu 
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul > li');

        menu.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('close-btn')) {
                menu.classList.toggle('active-menu');
            } else {
                target = target.closest('menu');
                if (target) {
                    menu.classList.toggle('active-menu');
                }
            }
        });

        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('active-menu');
        });

    };

    toggleMenu();

    // Popup 
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupContent = popup.querySelector('.popup-content'),
              popupBtn = document.querySelectorAll('.popup-btn');

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
                    let idInterval = setInterval(animated, 4);
                } else {
                    popup.style = `display: block`;
                }
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }
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

            target = target.closest('.service-header-tab');
            
            if(target) {
                tab.forEach((item, i) => {
                    if(item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tubs();

    // Slider 

    const slider = () => {
        const slider = document.querySelector('.portfolio-content'),
              slide = document.querySelectorAll('.portfolio-item'),
              dots = document.querySelector('.portfolio-dots'),
              btn = document.querySelectorAll('.portfolio-btn');

        let currentSlide = 0,
            interval,
            dot;

        for (let i = 0; i < slide.length; i++) {
            const elem = document.createElement('li');
            elem.classList.add('dot');
            dots.append(elem);
        }

        dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(2000);
    };

    slider();
          
});