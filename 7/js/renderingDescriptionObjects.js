import {getArrayOfObjects} from './data.js';
import {displayingBigPhoto} from './dispalyingBigPicture.js';
const galery = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const descriptionObjects = getArrayOfObjects(25);
const renderingPhotos = () => {

  const similarListFragment = document.createDocumentFragment();
  descriptionObjects.forEach((pictureElement) => {
    const clonePicture = pictureTemplate.cloneNode(true);
    clonePicture.querySelector('.picture__img').src = pictureElement.url;
    clonePicture.querySelector('.picture__likes').textContent = pictureElement.likes;
    clonePicture.querySelector('.picture__comments').textContent = pictureElement.comments.length;
    similarListFragment.append(clonePicture);
  });
  galery.append(similarListFragment);
};
displayingBigPhoto();
export{renderingPhotos};
export{descriptionObjects};

