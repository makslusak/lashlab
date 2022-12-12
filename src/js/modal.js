const btnsRef = document.querySelectorAll('[data-modal-open]');
const backdropRef = document.querySelector('.backdrop');
const btnCloseModalRef = document.querySelector('[data-modal-close]');

btnsRef.forEach(btn => btn.addEventListener('click', openModal));

function openModal(evt) {
  backdropRef.addEventListener('click', backdropClick);
  btnCloseModalRef.addEventListener('click', closeModal);
  window.addEventListener('keydown', backdropClick);
  backdropRef.classList.add('js-menu-open');
  backdropRef.classList.remove('js-menu-close');
  window.scrollTo(top);
  noScrollBody();
}
function closeModal(evt) {
  backdropRef.classList.remove('js-menu-open');
  backdropRef.classList.add('js-menu-close');
  scrollBody();
  btnCloseModalRef.removeEventListener('click', closeModal);
  backdropRef.removeEventListener('click', backdropClick);
  window.removeEventListener('keydown', backdropClick);
}
function backdropClick(evt) {
  if (evt.target === evt.currentTarget || evt.code === 'Escape') closeModal();
}

export function noScrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'hidden';
}

export function scrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'auto';
}
