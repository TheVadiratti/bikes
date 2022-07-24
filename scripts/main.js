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

    // таймер для плавного открытия меню
    setTimeout(() => {
      headerMenu.classList.add('header__menu_opened');
    toggleArea.classList.add('toggle-area_opened');
    buttonMenu.classList.remove('header__button_type_menu');
    buttonMenu.classList.add('header__button_type_x');
    }, 300);
  }
  else if (buttonMenu.classList.contains('header__button_type_x')) {

    // таймер для плавного закрытия
    setTimeout(() => {
      header.classList.remove('header_opened');
    }, 200);
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

setTimeout(() => {
  cardBikeAnimation();
}, 500);

// анимация кнопки подробнее

function loading() {
  leadButton.classList.add('lead__button_animation');
}

leadButton.addEventListener('click', loading);

// Массив с данными Coverages

const dataCoverages = [
  
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

function returnCoverage() {
  if (i > 0) {
    i = i - 1;
    coveragesLoad(i);
  }
}

buttonBack.addEventListener('click', returnCoverage);

function nextCoverage() {
  if (i < 2) {
    i = i + 1;
    coveragesLoad(i);
  }
}

buttonForward.addEventListener('click', nextCoverage);

// Массив с данными Bikes

const dataBikes = [

  // highway
  {
    nameOne: "Cervelo Caledonia-5",
    bikeOne: "../images/bikes/Carvelo_Caledonia-5.png",
    nameTwo: "Cannondale Systemsix Himod",
    bikeTwo: "../images/bikes/Cannondale_Systemsix_Himod.png",
    nameThree: "Cervelo Caledonia-5",
    bikeThree: "../images/bikes/Trek_Domane_SL-7.png"
  },

  // gravel
  {
    nameOne: "Cervelo Aspero GRX 810",
    bikeOne: "../images/bikes/Cervelo_Aspero_GRX_810.png",
    nameTwo: "Specialized S-Works Diverge",
    bikeTwo: "../images/bikes/Specialized_S-Works_Diverge.png",
    nameThree: "Cannondale Topstone Lefty 3",
    bikeThree: "../images/bikes/Cannondale_Topstone_Lefty_3.png"
  },

  // TT
  {
    nameOne: "Specialized S-Works Shiv",
    bikeOne: "../images/bikes/Specialized_S-Works_Shiv.png",
    nameTwo: "BMC Timemachine 01 ONE",
    bikeTwo: "../images/bikes/BMC_Timemachine_01_ONE.png",
    nameThree: "Cervelo P-Series",
    bikeThree: "../images/bikes/Cervelo_P-Series.png"
  }
]

// Переключатель Bikes

const bikesButtons = Array.from(document.querySelectorAll('.bikes__button'));
const bikesImages = Array.from(document.querySelectorAll('.card-bike__image_place_bikes'));
const bikesName = Array.from(document.querySelectorAll('.bikes__name'));
let n;

function changeBikes (coverage) {
  // Изменение карточек
  switch (coverage) {
    case 'Шоссе':
      n = 0;
      bikesImages[0].setAttribute('src', `${dataBikes[n].bikeOne}`);
      bikesName[0].textContent = dataBikes[n].nameOne;
      bikesImages[1].setAttribute('src', `${dataBikes[n].bikeTwo}`);
      bikesName[1].textContent = dataBikes[n].nameTwo;
      bikesImages[2].setAttribute('src', `${dataBikes[n].bikeThree}`);
      bikesName[2].textContent = dataBikes[n].nameThree;
      break;
    case 'Грэвел':
      n = 1;
      bikesImages[0].setAttribute('src', `${dataBikes[n].bikeOne}`);
      bikesName[0].textContent = dataBikes[n].nameOne;
      bikesImages[1].setAttribute('src', `${dataBikes[n].bikeTwo}`);
      bikesName[1].textContent = dataBikes[n].nameTwo;
      bikesImages[2].setAttribute('src', `${dataBikes[n].bikeThree}`);
      bikesName[2].textContent = dataBikes[n].nameThree;
      break;
    case 'ТТ':
      n = 2;
      bikesImages[0].setAttribute('src', `${dataBikes[n].bikeOne}`);
      bikesName[0].textContent = dataBikes[n].nameOne;
      bikesImages[1].setAttribute('src', `${dataBikes[n].bikeTwo}`);
      bikesName[1].textContent = dataBikes[n].nameTwo;
      bikesImages[2].setAttribute('src', `${dataBikes[n].bikeThree}`);
      bikesName[2].textContent = dataBikes[n].nameThree;
      break;
  }
}

bikesButtons.forEach(item => {
  item.addEventListener('click', function (event) {

    // Проверка нажатия на уже активный вариант
    if (!event.target.classList.contains('.bikes__button_active')) {

      // Удаление модификатора активного пункта
      document.querySelector('.bikes__button_active').classList.remove('bikes__button_active');

      // Добавление модификатора активного пункта
      event.target.classList.add('bikes__button_active');

      // Изменение карточек
      changeBikes(event.target.textContent);
    }   
  })
})

const optionElements = Array.from(document.querySelectorAll('.bikes__select'));
const selectElement = document.querySelector('.bikes__menu-mobile');

selectElement.addEventListener('change', () => {
  changeBikes(selectElement.value);
  cardBikes.forEach(card => {

    // обнуление слайдера
    card.style.right = `0%`;

    // поиск активного индикатора и удаление класса active
    document.querySelector('.slider-indicator__point_active').classList.remove('slider-indicator__point_active');

    // добавление класса нужному индикатору
    indicatorPoints[0].classList.add('slider-indicator__point_active');

    // обнуление счетчика слайдов
    kk = 0;
  })
})

// ________________________________SWIPE_______________________________________

const cardsBikeCnt = document.querySelector('.bikes__cards-cnt');
const cardBikes = Array.from(document.querySelectorAll('.bikes__card-area'));
let startX;
let endX;
let kk = 0;
const indicatorPoints = Array.from(document.querySelectorAll('.slider-indicator__point'));

function createPromise() {

  const swipeStart = new Promise(function(resolve) {
    cardsBikeCnt.addEventListener('touchstart', (event) => {
      startX = event.changedTouches[0].pageX;
      resolve();
    });
  });

  const swipeEnd = new Promise(function(resolve) {
    cardsBikeCnt.addEventListener('touchend', (event) => {
      endX = event.changedTouches[0].pageX;
      resolve();
    });
  })

  Promise.all([swipeStart, swipeEnd])

  .then(() => {

    // проверка направления свайпа
    if(startX > endX && kk < 2) {

      kk = kk + 1;

      indicatorPoints[kk].classList.add('slider-indicator__point_active');
      indicatorPoints[kk - 1].classList.remove('slider-indicator__point_active');


      // движение
      cardBikes.forEach(card => {
        i = card.style.right.indexOf('%');
        initValue = card.style.right.slice(0, i);
        nextValue = Number(initValue) + 100;
        card.style.right = `${nextValue}%`;
      })
    }
    else if (startX < endX && kk > 0) {

      kk = kk - 1;

      indicatorPoints[kk].classList.add('slider-indicator__point_active');
      indicatorPoints[kk + 1].classList.remove('slider-indicator__point_active');

      cardBikes.forEach(card => {
        i = card.style.right.indexOf('%');
        initValue = card.style.right.slice(0, i);
        nextValue = Number(initValue) - 100;
        card.style.right = `${nextValue}%`;
      })
    }
    createPromise();
  })
}

createPromise();