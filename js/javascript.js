import AnimaScroll from './module/anima-scroll.js';
import ScrollSuave from './module/scroll-suave.js';

const animaScroll = new AnimaScroll('[data-scroll]');
animaScroll.init();

const scrollSuave = new ScrollSuave('[data-list] a[href^="#"]');
scrollSuave.init();
