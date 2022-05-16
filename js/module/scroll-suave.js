export default function initScroll() {
    const scrollSuave = document.querySelectorAll('[data-scroll]');
    const windowHalf = window.innerHeight * .9;

    if(scrollSuave.length) {
        function startScroll() {
            scrollSuave.forEach((itens) => {
                const sectionTop = itens.getBoundingClientRect().top;
                const conta = (sectionTop - windowHalf) < 0;

                if(conta) { 
                    itens.classList.add('active');
                }
            });
        }

        startScroll()

        window.addEventListener('scroll', startScroll);
    }
}