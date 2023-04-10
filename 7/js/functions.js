function getAnswAboutStrLen(string, maxLenght) {
  const result = string.length <= maxLenght;
  return result;
}

function reverseStr(string) {
  let res = '';
  for (let i = string.length - 1; i >= 0; i--) {
    res = res.concat(string[i]).toLowerCase();
  }
  return res;
}
function strWithoutSpaces(string) {
  return string.split(' ').join('');
}

function isPolindrom(string) {
  return strWithoutSpaces(reverseStr(string)) === strWithoutSpaces(string).toLowerCase();
}

/*
function getTheNumbers(string) {
  let stringOfNumbers = '';
  let checkPositiveNum = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      if (string[i] >= '1') {
        checkPositiveNum = true;
        stringOfNumbers = stringOfNumbers.concat(string[i]);
      } else {
        if (checkPositiveNum) {
          stringOfNumbers = stringOfNumbers.concat(string[i]);
        }
      }
    } else {
      checkPositiveNum = false;
    }
  }
  return +stringOfNumbers;
}
*/
function getTheNumbers2(string) {
  const string2 = String(string);
  let stringOfNumbers = '';
  for (let i = 0; i < string2.length; i++) {
    if (string2[i] >= '0' && string2[i] <= '9') {
      stringOfNumbers = stringOfNumbers.concat(string2[i]);
    }
  }
  if (stringOfNumbers === '') {
    return NaN;
  }
  return +stringOfNumbers;
}


function addCharactersToTheString(sourceString, minimumLength, additionalСharacters) {
  let newString = '';
  let newStringlength = additionalСharacters.length + sourceString.length;
  let lengthDifference;
  if (sourceString.length >= minimumLength) {
    return sourceString;
  }
  if (newStringlength === minimumLength) {
    return additionalСharacters + sourceString;
  }
  if (newStringlength > minimumLength) {
    lengthDifference = newStringlength - minimumLength;
    while (newStringlength !== minimumLength) {
      newString = additionalСharacters.slice(0, - lengthDifference) + sourceString;
      newStringlength--;
    }
    return newString;
  }

  let testString = sourceString;
  while (additionalСharacters.length + testString.length <= minimumLength) {
    testString = additionalСharacters + testString;
  }
  newStringlength = testString.length + additionalСharacters.length;
  lengthDifference = newStringlength - minimumLength;
  while (newStringlength !== minimumLength) {
    newString = additionalСharacters.slice(0, - lengthDifference) + testString;
    newStringlength--;
  }
  return newString;


}

// Cтрока короче 20 символов
getAnswAboutStrLen('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
getAnswAboutStrLen('проверяемая строка', 18); // true
// Строка длиннее 10 символов
getAnswAboutStrLen('проверяемая строка', 10); // false

// Строка является палиндромом
isPolindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPolindrom('ДовОд'); // true
// Это не палиндром
isPolindrom('Кекс'); // false

getTheNumbers2('2023 год'); // 2023
getTheNumbers2('ECMAScript 2022'); // 2022
getTheNumbers2('1 кефир, 0.5 батона'); // 105
getTheNumbers2('агент 007'); // 7
getTheNumbers2('а я томат'); // NaN

getTheNumbers2(2023); // 2023
getTheNumbers2(-1); // 1
getTheNumbers2(1.5); // 15

// Добавочный символ использован один раз
addCharactersToTheString('1', 2, '0'); // '01'

// Добавочный символ использован три раза
addCharactersToTheString('1', 4, '0'); // '0001'

// Добавочные символы обрезаны с конца
addCharactersToTheString('q', 4, 'werty'); // 'werq'

// Добавочные символы использованы полтора раза
addCharactersToTheString('q', 4, 'we'); // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
addCharactersToTheString('qwerty', 4, '0'); // 'qwerty'*/
