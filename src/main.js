import 'flowbite';
import './style.css'

var sideMenu = document.querySelector('menu');

document.getElementById('open-menu').addEventListener('click', function() {
    sideMenu.classList.add('side-menu-open');
    sideMenu.classList.remove('side-menu-close');
})

document.getElementById('close-menu').addEventListener('click', function () {
    sideMenu.classList.add('side-menu-close');
    sideMenu.classList.remove('side-menu-open');
})

var nextButton = document.getElementById("next-button");
setTimeout(() => {nextButton.click();}, 1000)
setTimeout(() => {nextButton.click();}, 1000)
setTimeout(() => {nextButton.click();}, 1000)
setTimeout(() => {nextButton.click();}, 1000)
setTimeout(() => {nextButton.click();}, 1000)