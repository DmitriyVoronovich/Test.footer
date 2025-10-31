const burger = document.querySelector('.header__burger');
const headerServices = document.querySelector('.header__services');
const navList = document.querySelector('.header__nav-list');
const navWrapper = document.querySelector('.header__nav');
const navItems = document.querySelectorAll('.header__nav-item');
const navLinks = document.querySelectorAll('.header__nav-link');
const actionBlock = document.querySelector('.header__contacts-actions');
console.log(actionBlock)

burger.addEventListener('click', () => {
  navList.classList.toggle('header__nav-list--open');
  navWrapper.classList.toggle('header__nav--open');
  headerServices.classList.toggle('header__services--open');
  actionBlock.classList.toggle('header__contacts-actions--open');
  navItems.forEach(item => {
    item.classList.toggle('header__nav-item--open');
  });
  navLinks.forEach(item => {
    item.classList.toggle('header__nav-link--open');
  });
  burger.classList.toggle('header__burger--active');
});

const infoRow = document.querySelector('.header__contacts-info-row');
const addresses = document.querySelector('.header-contacts__addresses');
const dropdown = document.querySelector('.header__contacts-dropdown');

infoRow.addEventListener('mouseenter', () => {
  addresses.classList.add('header-contacts__addresses--open');
});
dropdown.addEventListener('click', () => {
  addresses.classList.toggle('header-contacts__addresses--open');
});
dropdown.addEventListener('click', () => {
  dropdown.classList.toggle('header__contacts-dropdown--open');
});
infoRow.addEventListener('mouseleave', () => {
  addresses.classList.remove('header-contacts__addresses--open');
});
