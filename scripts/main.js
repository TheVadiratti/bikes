const buttonMenu = document.querySelector('.header__button');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const toggleArea = document.querySelector('.toggle-area');
const themeToggle = document.querySelector('.toggle-area__toggle');
const toggle = document.querySelector('.toggle-area__toggle');
const page = document.querySelector('.page');
const headerLinks = document.querySelectorAll('.header__menu-link');
const cardBikeLead = document.querySelector('.card-bike_place_lead');

function openMenu() {
  if (buttonMenu.classList.contains('header__button_type_menu')) {
    header.classList.add('header_opened');
    headerMenu.classList.add('header__menu_opened');
    toggleArea.classList.add('toggle-area_opened');
    buttonMenu.classList.remove('header__button_type_menu');
    buttonMenu.classList.add('header__button_type_x');
  }
  else if (buttonMenu.classList.contains('header__button_type_x')) {
    header.classList.remove('header_opened');
    headerMenu.classList.remove('header__menu_opened');
    toggleArea.classList.remove('toggle-area_opened');
    buttonMenu.classList.remove('header__button_type_x');
    buttonMenu.classList.add('header__button_type_menu');
  }
}

buttonMenu.addEventListener('click', openMenu);

function changeTheme() {
  page.classList.toggle('page_theme_dark');
  header.classList.toggle('header_theme_dark');
  headerLinks.forEach(item => {
    item.classList.toggle('header__menu-link_theme_dark');
  })
  toggle.classList.toggle('toggle-area__toggle_theme_dark');
  buttonMenu.classList.toggle('header__button_theme_dark');
}

themeToggle.addEventListener('click', changeTheme);

function cardBikeAnimation() {
  cardBikeLead.classList.add('card-bike_animation');
}

document.addEventListener('scroll', cardBikeAnimation);