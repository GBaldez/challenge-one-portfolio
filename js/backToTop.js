const backToTop = document.querySelector('.backToTop');
const goToTop = () => window.scrollTo(0, 0);

window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) return;
    if (window.scrollY > 100) {
        backToTop.style.display = 'block';
        backToTop.innerHTML = 'Voltar ao topo <i class="uil uil-arrow-up"></i>';
        backToTop.addEventListener('click', goToTop);
    } else {
        if (backToTop) {
            backToTop.style.display = 'none';
        }
    }
});