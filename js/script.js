import tabs from './modules/tabs';
import timerModul from './modules/timer';
import modal from './modules/modalWind';
import card from './modules/cards';
import forms from './modules/form';
import slides from './modules/slides';
import calck from './modules/calck';
import {openModal} from './modules/modalWind';
window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 300000);

    tabs();
    timerModul('.timer', '2023-01-01');
    modal('[data-modal]', '.modal', modalTimerId);
    card();
    forms('form', modalTimerId);
    slides({
        continer: '.offer__slide',
        nextArr: '.offer__slider-next',
        parentSelector: '.offer__slider',
        currentArr: '#current',
        totalArr: '#total',
        wrapperArr: '.offer__slider-wrapper',
        fialdArr: '.offer__slider-inner',
        prevArr: '.offer__slider-prev'
    });
    calck();
    
});