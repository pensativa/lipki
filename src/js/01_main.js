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