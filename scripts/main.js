const buttonMenu = document.querySelector('.header__button');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header__menu-link');
const toggleArea = document.querySelector('.toggle-area');
const themeToggles = document.querySelectorAll('.toggle-area__toggle');
const toggleHeader = document.querySelector('.toggle-area__toggle_place_header');
const toggleFooter = document.querySelector('.toggle-area__toggle_place_footer');
const sectionDescriptions = document.querySelectorAll('.section-description');
const page = document.querySelector('.page');
const trainingsLinks = document.querySelectorAll('.trainings__link');
const bikesLinks = document.querySelectorAll('.bikes__name');
const cardBikeLead = document.querySelector('.card-bike_place_lead');
const leadButton = document.querySelector('.lead__button');
const okButton = document.querySelector('.footer__submit');
const footer = document.querySelector('.footer');
const footerInput = document.querySelector('.footer__input');
const coveragesButtons = document.querySelectorAll('.coverages__button');

// Открытие мобайл меню

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

// изменение темы

function changeTheme() {
  page.classList.toggle('page_theme_dark');
  header.classList.toggle('header_theme_dark');
  headerLinks.forEach(item => {
    item.classList.toggle('header__menu-link_theme_dark');
  })
  toggleHeader.classList.toggle('toggle-area__toggle_theme_dark');
  toggleFooter.classList.toggle('toggle-area__toggle_theme_dark');
  buttonMenu.classList.toggle('header__button_theme_dark');
  sectionDescriptions.forEach(item => {
    item.classList.toggle('section-description_theme_dark');
  })
  trainingsLinks.forEach(item => {
    item.classList.toggle('trainings__link_theme_dark');
  })
  footer.classList.toggle('footer_theme_dark');
  bikesLinks.forEach(item => {
    item.classList.toggle('bikes__name_theme_dark');
  })
  footerInput.classList.toggle('footer__input_theme_dark');
  coveragesButtons.forEach(item => {
    item.classList.toggle('coverages__button_theme_dark');
  })
}

themeToggles.forEach(item => {
  item.addEventListener('click', changeTheme);
})
  
// анимация велосипеда

function cardBikeAnimation() {
  cardBikeLead.classList.add('card-bike_animation');
}

document.addEventListener('scroll', cardBikeAnimation);

// анимация кнопки подробнее

function loading() {
  leadButton.classList.add('lead__button_animation');
}

leadButton.addEventListener('click', loading);

// Объект с данными Coverages

let dataCoverages = [
  
  // highway
  {
    heading: "Шоссе",
    description: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
    picFirst: "url(../../../images/coverages/highway/image1.png)",
    picSecond: "url(../../../images/coverages/highway/image2.png)",
    wayIcon: "url(../../../images/coverages/highway/way-icon.svg)"
  },
  
  // gravel
  {
    heading: "Грэвел",
    description: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    picFirst: "url(../../../images/coverages/gravel/image1.png)",
    picSecond: "url(../../../images/coverages/gravel/image2.png)",
    wayIcon: "url(../../../images/coverages/gravel/way-icon.svg)"
  },

  // TT
  {
    heading: "ТТ",
    description: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
    picFirst: "url(../../../images/coverages/TT/image1.png)",
    picSecond: "url(../../../images/coverages/TT/image2.png)",
    wayIcon: "url(../../../images/coverages/TT/way-icon.svg)"
  }
];

// Переключатель Coverages

const buttonBack = document.querySelector('.coverages__button_type_back');
const buttonForward = document.querySelector('.coverages__button_type_forward');

const coveragesHeading = document.querySelector('.coverages__heading');
const coveragesDescription = document.querySelector('.coverages__description');
const coveragesImages = document.querySelectorAll('.coverages__image');
const coveragesWayIcon = document.querySelector('.coverages__way-icon');

let i = 0;

function coveragesLoad(score) {
  coveragesHeading.textContent = dataCoverages[score].heading;
  coveragesDescription.textContent = dataCoverages[score].description;
  coveragesImages[0].style.backgroundImage = dataCoverages[score].picFirst;
  coveragesImages[1].style.backgroundImage = dataCoverages[score].picSecond;
  coveragesWayIcon.style.backgroundImage = dataCoverages[score].wayIcon;
}

function back() {
  if (i > 0) {
    i = i - 1;
    coveragesLoad(i);
  }
}

buttonBack.addEventListener('click', back);

function forward() {
  if (i < 2) {
    i = i + 1;
    coveragesLoad(i);
  }
}

buttonForward.addEventListener('click', forward);