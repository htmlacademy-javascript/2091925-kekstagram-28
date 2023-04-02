import {getArrayOfObjects} from './data.js';
const galery = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const renderingPhotos = () => {
  const descriptionObjects = getArrayOfObjects(25);
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
export{renderingPhotos};


