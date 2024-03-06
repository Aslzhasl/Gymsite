const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar_logo');
const body = document.querySelector('body');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
  body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// animation
