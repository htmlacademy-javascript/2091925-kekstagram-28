import { descriptionObjects } from './renderingDescriptionObjects.js';
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureLikes = document.querySelector('.likes-count');
const bigPictureCommenstCount = document.querySelector('.comments-count');
const bigPictureCommentsList = document.querySelector('.social__comments');
const description = document.querySelector('.social__caption');
const allPictures = document.querySelector('.pictures');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');

const createCommentOfBigPicture = (element) => {

  const similarListFragment = document.createDocumentFragment();
  const elementImg = element.querySelector('.picture__img');
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');
  li.classList.add('social__comment');
  img.classList.add('social__picture');
  const dataObject = descriptionObjects.find((obj) => elementImg.src.endsWith(obj.url));
  const arrayOfComments = dataObject.comments;
  description.textContent = dataObject.description;
  for(const comment of arrayOfComments){
    img.src = comment.avatar;
    img.alt = comment.name;
    p.textContent = comment.message;
    img.width = '35';
    img.height = '35';
    p.classList.add('social__text');
    li.append(img);
    li.append(p);
    const newLi = li.cloneNode(true);
    similarListFragment.append(newLi);
  }
  return similarListFragment;
};


const renderBigPicture = (evt) => {
  const smallPicture = evt.target.closest('.picture');
  const smallPictureLikes = smallPicture.querySelector('.picture__likes');
  const smallPictureCommentsCount = smallPicture.querySelector('.picture__comments');
  if(evt.target.matches('.picture__img')){
    bigPictureClose.addEventListener('click', () =>{
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    });
    bigPictureCommentsList.innerHTML = '';
    bigPicture.classList.remove('hidden');
    commentsLoader.classList.add('hidden');
    socialCommentCount.classList.add('hidden');
    body.classList.add('modal-open');

    bigPictureImg.src = evt.target.src;
    bigPictureLikes.textContent = smallPictureLikes.textContent;
    bigPictureCommenstCount.textContent = smallPictureCommentsCount.textContent;
    bigPictureCommentsList.append(createCommentOfBigPicture(smallPicture));
  }
};

const displayingBigPhoto = () => {
  allPictures.addEventListener('click', renderBigPicture);
};


export{displayingBigPhoto};

