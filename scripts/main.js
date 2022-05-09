const buttonMenu = document.querySelector('.header__button');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const toggleArea = document.querySelector('.toggle-area');

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