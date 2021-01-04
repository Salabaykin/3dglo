'use strict';

import countTimer from './modules/countTimer';
import calc from './modules/calc';
import command from './modules/command';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';

// Timer 
countTimer('10 January 2021');

// Menu 
toggleMenu();

// Popup 
togglePopup();

// Tabs 
tabs();

// Command
command();

// Slider 
slider();

// Calc
calc(100);

// Ajax form
sendForm('form1');
sendForm('form2');
sendForm('form3'); 