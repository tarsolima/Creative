export default function initScroll() {
    const scrollSuave = document.querySelectorAll('[data-scroll]');
    const windowHalf = window.innerHeight * .8;

    function startScroll() {
        scrollSuave.forEach((itens) => {
            const sectionTop = itens.getBoundingClientRect().top;
            const conta = (sectionTop - windowHalf) < 0;

            if(conta) { 
                itens.classList.add('active');
            }
        });
    }

    if (scrollSuave.length) {
    startScroll()
    window.addEventListener('scroll', startScroll);
    }
}