//Header scripts
const changeHeaderOnScroll = function() {
    const header = document.querySelector('.header');
    if(window.pageYOffset > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
};
window.onscroll = function() {
    changeHeaderOnScroll();
};

const changeStyleMenu = function() {
    const header = document.querySelector('.header');
    const myCollapseEl = document.getElementById('navbarToggleExternalContent')

    myCollapseEl.addEventListener('shown.bs.collapse', function (event) {
        header.classList.add('open');
    });
    myCollapseEl.addEventListener('hidden.bs.collapse', function (event) {
        header.classList.remove('open');
    });
}
changeStyleMenu();

//Front slider

var frontSlider = new Swiper(".front-services__slider", {
  slidesPerView: 3,
  loop: true,
  init: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

if (window.innerWidth > 768) {
  frontSlider.init();
} else {
  frontSlider.disable();
}

//Show filters

const showOtherFilters = function() {
  const filterBtn = document.getElementById('filterSettings');
  const filterBlock = document.querySelector('.filter__setings');
  if(!filterBtn) {
    return;
  }
  filterBtn.onclick = function() {
    filterBlock.classList.toggle('show');
  }
};

showOtherFilters();

//About team slider

var swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Change currency

const changeCurencyProductPrice = function() {
  const currencyBlock = document.querySelector('.product__data-item.price');
  if(!currencyBlock) {
    return;
  }
  const currencyButton = currencyBlock.querySelector('.currency');
  const price = currencyBlock.querySelector('.num');
  let priceNum = price.innerHTML;
  let currencySymbol = currencyBlock.querySelector('.cur');
  currencyButton.onclick = function() {
    priceNum = price.innerHTML;
    currencyBlock.classList.toggle('ukr');
    if (currencyBlock.classList.contains('ukr')) {
      price.innerHTML = Number(priceNum) * 36;
      currencySymbol.innerHTML = 'грн.';
    } else {
      price.innerHTML = Number(priceNum) / 36;
      currencySymbol.innerHTML = '$';
    }
  };
};

changeCurencyProductPrice();

var swiperProduct = new Swiper(".product__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperProduct = new Swiper(".product__slider-img", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-n",
    prevEl: ".swiper-button-p",
  },
});