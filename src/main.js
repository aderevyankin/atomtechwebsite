import './style.css'
import 'flowbite';

var sideMenu = document.querySelector('menu');

document.getElementById('open-menu').addEventListener('click', function() {
    sideMenu.classList.add('side-menu-open');
    sideMenu.classList.remove('side-menu-close');
})

document.getElementById('close-menu').addEventListener('click', function () {
    sideMenu.classList.add('side-menu-close');
    sideMenu.classList.remove('side-menu-open');
})