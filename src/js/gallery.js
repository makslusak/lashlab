// import Swiper JS
import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';
// import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

function numberOfSlide() {
  if (window.matchMedia('(min-width: 1000px)').matches) {
    return 3;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 2;
  } else {
    return 1.43;
  }
}

function slideGap() {
  if (window.matchMedia('(min-width: 1000px)').matches) {
    return 30;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 110;
  } else {
    return 0;
  }
}

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: numberOfSlide(),
  spaceBetween: slideGap(),
  slidesPerGroup: 1,
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
