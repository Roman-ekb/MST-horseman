import { initScroll } from './onscroll.js'; 
import { initBurger } from './burger.js';

const initNavigation = () => {
    initScroll();
    initBurger();    
};

export {initNavigation};