const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open'); 
    });
});


function toggleMenu() {
    document.querySelector(".anchors").classList.toggle("show-menu");
    document.querySelector(".group3").classList.toggle("show-menu");
    document.querySelector(".social").classList.toggle("dropdown-menu");
}
