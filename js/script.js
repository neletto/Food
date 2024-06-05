
import  tabs  from './modules/tabs';
import  modal  from './modules/modal';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  slider  from './modules/slider';
import  forms from  './modules/forms';
import  calc  from './modules/calc';
import  {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout( () => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-06-20');
    cards();
    slider({
        container:'.offer__slider',
        nextArrow:'.offer__slider-next',
        slide:'.offer__slide',
        prevArrow:'.offer__slider-prev',
        totalCounter:'#total',
        currentCounter:'#current',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    forms('form', modalTimerId);
    calc();

});



