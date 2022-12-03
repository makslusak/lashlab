import { noScrollBody, scrollBody } from './modal';

const menuBtnRef = document.querySelector('[data-menu-open]');
const closeBtnRef = document.querySelector('[data-menu-close]');
const mobilMenuRef = document.querySelector('.mobil-menu');
const mobilLinksRef = document.querySelectorAll('[data-mobil-links]');

menuBtnRef.addEventListener('click', openMenu);

function openMenu(evt) {
  closeBtnRef.addEventListener('click', closeMenu);
  mobilMenuRef.classList.add('js-menu-open');
  mobilMenuRef.classList.remove('js-menu-close');
  noScrollBody();
  mobilLinksRef.forEach(link => link.addEventListener('click', linkClick));
}

function closeMenu(evt) {
  mobilMenuRef.classList.remove('js-menu-open');
  mobilMenuRef.classList.add('js-menu-close');
  scrollBody();
  closeBtnRef.removeEventListener('click', closeMenu);
}
function linkClick() {
  closeMenu();
  mobilLinksRef.forEach(link => link.removeEventListener('click', linkClick));
}
