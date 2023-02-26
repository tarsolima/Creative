export default class Scroll {
  constructor() {
    this.scrollSuave = document.querySelectorAll('[data-scroll]');
    this.windowHalf = window.innerHeight * .8;
    this.startScroll = this.startScroll.bind(this);
    this.startScroll();
  }

  startScroll() {
      this.scrollSuave.forEach((itens) => {
        const sectionTop = itens.getBoundingClientRect().top;
        const conta = (sectionTop - this.windowHalf) < 0;
        if (conta) itens.classList.add('active');
      });
  }

  addEvent() {
    window.addEventListener('scroll', this.startScroll);
  }

  init() {
    if(this.scrollSuave.length) {
        this.addEvent();
    }
  }
}