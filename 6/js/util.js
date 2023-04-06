const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getUnicRandomNum = (min, max) => {
  const generatedNum = [];

  return function () {
    let currentValue = getRandomNum(min, max);
    if (generatedNum.length >= max - min + 1) {
      return null;
    }
    while (generatedNum.includes(currentValue)) {
      currentValue = getRandomNum(min, max);
    }
    generatedNum.push(currentValue);
    return currentValue;
  };
};
export { getUnicRandomNum };
export { getRandomNum };
