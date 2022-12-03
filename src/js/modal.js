const btnsRef = document.querySelectorAll('[data-modal-open]');
const modalRef = document.querySelector('.modal');
const btnCloseModalRef = document.querySelector('[data-modal-close]');

btnsRef.forEach(btn => btn.addEventListener('click', openModal));

function openModal(evt) {
  btnCloseModalRef.addEventListener('click', closeModal);
  modalRef.classList.add('js-menu-open');
  modalRef.classList.remove('js-menu-close');
  window.scrollTo(top);
  noScrollBody();
}
function closeModal(evt) {
  modalRef.classList.remove('js-menu-open');
  modalRef.classList.add('js-menu-close');
  scrollBody();
  btnCloseModalRef.removeEventListener('click', closeModal);
}

export function noScrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'hidden';
}

export function scrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'auto';
}
