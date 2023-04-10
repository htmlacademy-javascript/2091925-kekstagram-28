import { bigPicture, body, gettingBigPicture } from './gettingBigPicture.js';
const bigPictureClose = document.querySelector('.big-picture__cancel');
const allPictures = document.querySelector('.pictures');

const isEsc = (evt) => evt.key === 'Escape';

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const closeBigPictureWithEsc = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEsc(evt)) {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};


const displayingBigPhoto = () => {
  allPictures.addEventListener('click', gettingBigPicture);
  bigPictureClose.addEventListener('click',closeBigPicture);
  closeBigPictureWithEsc();
};

export { displayingBigPhoto };
