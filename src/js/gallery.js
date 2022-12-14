import Swiper, { Navigation, Pagination, Keyboard, Lazy } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/lazy/lazy';
import 'swiper/modules/keyboard/keyboard';

function numberOfSlide() {
  if (window.matchMedia('(min-width: 1000px)').matches) {
    return 3;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 2;
  } else if (window.matchMedia('(min-width: 480px)').matches) {
    return 1.43;
  } else if (window.matchMedia('(min-width: 400px)').matches) {
    return 1.3;
  } else if (window.matchMedia('(min-width: 380px)').matches) {
    return 1.2;
  } else if (window.matchMedia('(min-width: 360px)').matches) {
    return 1.1;
  } else return 1;
}

function slideGap() {
  if (window.matchMedia('(min-width: 1000px)').matches) {
    return 30;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    return 110;
  } else {
    return 4;
  }
}

function isCentered() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    return false;
  } else {
    return true;
  }
}

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, Keyboard, Lazy],
  centeredSlides: isCentered(),
  slidesPerView: numberOfSlide(),
  spaceBetween: slideGap(),
  slidesPerGroup: 1,
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  watchSlidesProgress: true,
  preloadImages: false,
  lazy: true,
  watchSlidesProgress: true,
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
