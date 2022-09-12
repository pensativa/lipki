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
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  },
});

//Change currency

const changeCurencyProductPrice = function() {
  const currencyBlocks = document.querySelectorAll('.product__data-item.price');
  if(!currencyBlocks) {
    return;
  }
  currencyBlocks.forEach(element => {
    const currencyButton = element.querySelector('.currency');
    const price = element.querySelector('.num');
    let priceNum = price.innerHTML;
    let currencySymbol = element.querySelector('.cur');
    currencyButton.onclick = function() {
      priceNum = price.innerHTML;
      element.classList.toggle('ukr');
      if (element.classList.contains('ukr')) {
        price.innerHTML = Number(priceNum) * 36;
        currencySymbol.innerHTML = 'грн.';
      } else {
        price.innerHTML = Number(priceNum) / 36;
        currencySymbol.innerHTML = '$';
      }
    };
  });
  
};

changeCurencyProductPrice();

baguetteBox.run('.product__slider-img');

var swiperProduct = new Swiper(".product__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  },
});

const classTab = function() {
  const tabs = document.querySelectorAll('.product__tab');
  if(!tabs) {
    return
  }
  tabs.forEach(e => {
    e.classList.remove('active');
  })
}

const changeGallery = function() {
  const btns = document.querySelectorAll('.product__button');
  btns.forEach(btn => {
    btn.onclick = function(e) {
      e.preventDefault();
    classTab();
      const id = btn.getAttribute('data-target');
      document.getElementById(id).classList.add('active');
    }
  });
}

changeGallery();

var swiperProduct = new Swiper(".product__slider-img", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-n",
    prevEl: ".swiper-button-p",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});