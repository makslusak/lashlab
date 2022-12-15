import { noScrollBody, scrollBody } from './modal';
import { closeBtnRef, menuBtnRef, mobilLinksRef, mobilMenuRef } from './refs';

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
