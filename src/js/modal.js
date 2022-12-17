import axios from 'axios';
import {
  backdropRef,
  btnCloseModalRef,
  btnsRef,
  CHAT_ID,
  formRef,
  toastError,
  toastSuccess,
  URL,
} from './refs';
import { toastShown } from './toasts';

btnsRef.forEach(btn => btn.addEventListener('click', openModal));

function openModal(evt) {
  formRef.addEventListener('submit', submitForm);
  backdropRef.addEventListener('click', backdropClick);
  btnCloseModalRef.addEventListener('click', closeModal);
  window.addEventListener('keydown', backdropClick);
  backdropRef.classList.add('js-menu-open');
  backdropRef.classList.remove('js-menu-close');
  window.scrollTo(top);
  noScrollBody();
}
function closeModal() {
  formRef.removeEventListener('submit', submitForm);
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

async function submitForm(evt) {
  evt.preventDefault();
  let message = `<b>&#128151 Заявка з сайту &#128151</b>\n <b>Ім'я: </b> ${evt.target.name.value}\n <b>Номер телефону: </b> ${evt.target.tel.value}\n <b>Коментар: </b> ${evt.target.text.value}`;
  try {
    await axios
      .post(URL, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then(resp => {
        if (resp.status === 200) {
          closeModal();
          toastShown(toastSuccess);
        } else {
          toastShown(toastError);
        }
      });
  } catch (error) {
    toastShown(toastError);
  }
}

export function noScrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'hidden';
}

export function scrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'auto';
}
