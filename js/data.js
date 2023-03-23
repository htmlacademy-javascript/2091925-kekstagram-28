import { getUnicRandomNum } from './util.js';
import { getRandomNum } from './util.js';
const NUM_OF_AVATAR = 6;
const MAX_LIKES = 200;
const MIN_LIKES = 15;
const MAX_PHOTO_ID = 25;
const MAX_PHOTO_URL = 25;
const DESCRIPTIONS = [
  'Завораживающее изображение, на котором мы видим что-то интересное',
  'Картинка, наполненная душой автора, выполненая в необычайном стиле',
  'Изображение, позволяющее отдохнуть от ненужных мыслей, сделанное хорошим автором',
  'Фото, заставляющее нас о чем-то задуматься, может быть о смысле жизни',
  'Здесь мы видим интересную форму объектов, расположенных на фотографии',
  'Фотография сделана достаточно интересно, можно заметить интересный кадр',
  'Если пригледеться поближе, то вы можете увидеть что-то странное',
  'Забавная картинка, которая поднимет вам настроение',
  'Вы никогда не забудете это изображение',
  'Довольно таки непонятная фотография, может ввести вас в заблуждение',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Артем',
  'Игорь',
  'Максим',
  'Сергей',
  'Саша',
  'Мария',
  'Анатолий',
];

const createRandomArrayElement = (elements) =>
  elements[getRandomNum(0, elements.length - 1)];
const createRandomPhotoId = getUnicRandomNum(1, MAX_PHOTO_ID);
const createRandomUrl = getUnicRandomNum(1, MAX_PHOTO_URL);
const createRandomCommentId = getUnicRandomNum(100, 135);
const createComment = () => ({
  id: createRandomCommentId(),
  avatar: `img/avatar-${getRandomNum(1, NUM_OF_AVATAR)}.svg`,
  message: createRandomArrayElement(COMMENTS),
  name: createRandomArrayElement(NAMES),
});

const createDescriptionObject = () => ({
  id: createRandomPhotoId(),
  url: `photos/${createRandomUrl()}.jpg`,
  description: createRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNum(MIN_LIKES, MAX_LIKES),
  comments: createComment(),
});

const getArrayOfObjects = () =>
  function () {
    return Array.from({ length: 25 }, createDescriptionObject);
  };

export { getArrayOfObjects };
