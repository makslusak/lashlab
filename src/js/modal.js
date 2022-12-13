import { postToApi } from './postData';
import axios from 'axios';

const TOKEN = '5901077802:AAG9sLF9m09SLsPjDH02M0BkJyGRBWx9snE';
const CHAT_ID = '-608545556';
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const btnsRef = document.querySelectorAll('[data-modal-open]');
const backdropRef = document.querySelector('.backdrop');
const btnCloseModalRef = document.querySelector('[data-modal-close]');
const formRef = document.querySelector('[data-form]');
const submitBtnRef = document.querySelector('[data-submitBtn]');
const nameRef = document.querySelector('#name');
const telRef = document.querySelector('#tel');
const textRef = document.querySelector('#text');

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

function submitForm(evt) {
  evt.preventDefault();
  let message = `<b>&#128151 Заявка з сайту &#128151</b>\n <b>Ім'я: </b> ${evt.target.name.value}\n <b>Номер телефону: </b> ${evt.target.tel.value}\n <b>Коментар: </b> ${evt.target.text.value}`;
  axios
    .post(URL, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(resp => {
      if (resp.status === 200) evt.target.name.value = '';
      evt.target.tel.value = '';
      evt.target.text.value = '';
      closeModal();
    });
}

export function noScrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'hidden';
}

export function scrollBody() {
  const bodyRef = document.querySelector('body');
  bodyRef.style.overflow = 'auto';
}
