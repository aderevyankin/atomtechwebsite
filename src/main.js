import 'flowbite';
import { Modal } from 'flowbite';

import axios from 'axios';
import './style.css'

document.getElementById('img_highQuality').addEventListener('load', function (event) {
    var target = document.getElementById("bgblock");
    target.style.backgroundImage = "url(" + event.target.src + ")";
});

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

const TOKEN = '6146946272:AAE_G6ZTOdotE58kaP6MBZ9GtBf1_w_6BUg';
const CHAT_ID = '-1001853372997';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const $targetEl = document.getElementById('result-modal');
const modal = new Modal($targetEl);
const modаlText = document.getElementById('result-text');
let resultMessage = '';
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); //сбросил стандартное поведение
    let msg = `<b>Заявка с сайта</b>\n`;
    msg += `<b>Имя:</b> ${this.name.value}\n`;
    msg += `<b>Компания:</b> ${this.company.value}\n`;
    msg += `<b>Почта:</b> ${this.email.value}\n`;
    msg += `<b>Телефонный номер:</b> ${this.phonenum.value}\n`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: msg
    }).then((res) => {
        this.name.value = '';
        this.company.value = '';
        this.email.value = '';
        this.phonenum.value = '';
        resultMessage = 'Заявка отправлена. В ближайшее время менеджер с вами свяжется';
    }).catch((err) => {
        console.log(err);
        resultMessage = 'Не удалось отправить заявку. Попробуйте позже.'
    }).finally(() => {
        modаlText.innerHTML = resultMessage;
        modal.show();
    })
})
