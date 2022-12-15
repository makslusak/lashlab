import { toastCloseBtnsRef } from './refs';

export function toastShown(toast) {
  toast.classList.add('js-menu-open');
  toast.classList.remove('js-menu-close');
  toastCloseBtnsRef.forEach(toastElem =>
    toastElem.addEventListener('click', () => closeToast(toast))
  );
}
function closeToast(toast) {
  toast.classList.remove('js-menu-open');
  toast.classList.add('js-menu-close');
  toastCloseBtnsRef.forEach(toast =>
    toast.removeEventListener('click', closeToast)
  );
}
