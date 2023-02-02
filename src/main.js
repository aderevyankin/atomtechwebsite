import 'flowbite';
import './style.css'

var sideMenu = document.querySelector('menu');

document.getElementById('open-menu').addEventListener('click', function () {
    sideMenu.classList.add('side-menu-open');
    sideMenu.classList.remove('side-menu-close');
})

document.getElementById('close-menu').addEventListener('click', function () {
    sideMenu.classList.add('side-menu-close');
    sideMenu.classList.remove('side-menu-open');
})

let slideIndex = 1;
showSlides(slideIndex);

document.getElementById("next-button").addEventListener('click', function nextSlide() {
    showSlides(slideIndex += 1);
});

document.getElementById("prev-button").addEventListener('click', function previousSlide() {
    showSlides(slideIndex -= 1);
});

// addEventListener("resize", function currentSlide(n) {
//     showSlides(slideIndex = n);
// });


function showSlides(n) {
    let slides = document.getElementsByClassName("section");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = window.innerWidth >= 768 ? "flex" : "block";
}
