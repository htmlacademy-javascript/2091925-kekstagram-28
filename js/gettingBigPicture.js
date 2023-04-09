import { createCommentOfBigPicture , bigPictureCommentsList } from './creatingComentsOfBigPicture.js';
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommenstCount = document.querySelector('.comments-count');

const gettingBigPicture = (evt) => {
  evt.preventDefault();
  const smallPicture = evt.target.closest('.picture');
  const smallPictureLikes = smallPicture.querySelector('.picture__likes');
  const smallPictureCommentsCount =
    smallPicture.querySelector('.picture__comments');
  if (evt.target.matches('.picture__img')) {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    bigPictureImg.src = evt.target.src;
    bigPictureLikes.textContent = smallPictureLikes.textContent;
    bigPictureCommenstCount.textContent = smallPictureCommentsCount.textContent;
    bigPictureCommentsList.innerHTML = '';
    bigPictureCommentsList.append(createCommentOfBigPicture(smallPicture));
    /*функция отображения по 5*/
  }
};

export {bigPicture, body, bigPictureCommentsList ,gettingBigPicture};
