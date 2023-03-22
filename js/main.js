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
  'Довольно таки непонятная фотография, может ввести вас в заблуждение'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Артем',
  'Игорь',
  'Максим',
  'Сергей',
  'Саша',
  'Мария',
  'Анатолий'
];
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getUnicRandomNum = (min, max) => {
  const generatedNum = [];

  return function (){
    let currentValue = getRandomNum(min, max);
    if(generatedNum.length >= (max - min) + 1){
      return null;
    }
    while (generatedNum.includes(currentValue)){
      currentValue = getRandomNum(min, max);
    }
    generatedNum.push(currentValue);
    return currentValue;
  };
};

const createRandomArrayElement = (elements) => elements[getRandomNum(0, elements.length - 1)];
const createRandomPhotoId = getUnicRandomNum(1, 25);
const createRandomUrl = getUnicRandomNum(1, 25);
const createRandomCommentId = getUnicRandomNum(100,135);

const createComment = () => ({
  id: createRandomCommentId(),
  avatar: `img/avatar-${getRandomNum(1,6)}.svg`,
  message: createRandomArrayElement(COMMENTS),
  name: createRandomArrayElement(NAMES),
});

const createDescriptionObject = () => ({
  id: createRandomPhotoId(),
  url: `photos/${createRandomUrl()}.jpg`,
  description: createRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNum(15,200),
  comments:  createComment(),
});

const descriptionObject = Array.from({length:25}, createDescriptionObject);

/*console.log(descriptionObject);*/
