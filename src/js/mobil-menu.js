const menuBtnRef = document.querySelector('[data-menu-open]');
const closeBtnRef = document.querySelector('[data-menu-close]');
const mobilMenuRef = document.querySelector('.mobil-menu');

menuBtnRef.addEventListener('click', openMenu);
closeBtnRef.addEventListener('click', closeMenu);

function openMenu(evt) {
  mobilMenuRef.classList.add('js-menu-open');
  mobilMenuRef.classList.remove('js-menu-close');
}
function closeMenu(evt) {
  mobilMenuRef.classList.remove('js-menu-open');
  mobilMenuRef.classList.add('js-menu-close');
}
