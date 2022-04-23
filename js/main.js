const burger = document.querySelector('.burger');
const navLink = document.querySelector('.nav__link');

burger.addEventListener('click', function(){
    navLink.classList.toggle('active')
})