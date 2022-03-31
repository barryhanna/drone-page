// javascript
const closeMobileMenuBtn = document.querySelector('.close-mobile-menu');
const openMobileMenuBtn = document.querySelector('.open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');

openMobileMenuBtn.addEventListener('click', (e) => {
  mobileMenu.classList.add('open');
});

closeMobileMenuBtn.addEventListener('click', (e) => {
  mobileMenu.classList.remove('open');
});
