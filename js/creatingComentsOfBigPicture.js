import { descriptionObjects } from './renderingDescriptionObjects.js';
const socialCommentCount = document.querySelector('.social__comment-count');
const description = document.querySelector('.social__caption');
const socialCommentsLoader = document.querySelector('.social__comments-loader');
const bigPictureCommentsList = document.querySelector('.social__comments');

const loaderOfComments = (comments) =>
  function () {
    let fiveComments = 0;
    for (let comment = 0; comment < comments.length; comment++) {
      if (comments[comment].classList.contains('hidden')) {
        comments[comment].classList.remove('hidden');
        fiveComments++;
        socialCommentCount.textContent = '';
        socialCommentCount.insertAdjacentHTML(
          'afterbegin',
          `${comment + 1} из <span class="comments-count"> ${
            comments.length
          } </span> комментариев`
        );
      }
      if (fiveComments === 5) {
        break;
      }
    }
  };

const uploadComments = loaderOfComments(bigPictureCommentsList.children);
socialCommentsLoader.addEventListener('click', uploadComments);

const createCommentOfBigPicture = (element) => {
  const similarListFragment = document.createDocumentFragment();
  const elementImg = element.querySelector('.picture__img');
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');
  li.classList.add('social__comment');
  img.classList.add('social__picture');
  const dataObject = descriptionObjects.find((obj) =>
    elementImg.src.endsWith(obj.url)
  );
  const arrayOfComments = dataObject.comments;
  description.textContent = dataObject.description;
  let j = 0;
  for (let i = 0; i < arrayOfComments.length; i++) {
    if (i >= 5) {
      li.classList.add('hidden');
      j++;
    }
    socialCommentCount.textContent = '';
    socialCommentCount.insertAdjacentHTML(
      'afterbegin',
      `${i - j + 1} из <span class='comments-count'> ${
        arrayOfComments.length
      } </span> комментариев`
    );
    img.src = arrayOfComments[i].avatar;
    img.alt = arrayOfComments[i].name;
    p.textContent = arrayOfComments[i].message;
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

export { createCommentOfBigPicture, loaderOfComments, bigPictureCommentsList };
