// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));

/* 
  1. decrement(3) will be called and return 2
  2. square(2) will be called and retrun 4
  3. decrement(4) will be called and retrun 3
  4. square(3) will be called and retrun 9
*/

// 1-2
decrement(decrement(square(square(3))));

/* 
  1. square(3) will be called and return 9
  2. square(9) will be called and return 81
  3. decrement(81) will be called and return 80
  4. decrement(80) will be called and return 79
*/

// 1-3
duplicateString(reverseString('hello'));

/* 
  1. reverseString('hello') will be called and return 'olleh'
  2. duplicateString('olleh') will be called and return 'olleholleh'
*/

// 1-4
reverseString(duplicateString(duplicateString('foo')));

/* 
  1. duplicateString('foo') will be called and return 'foofoo'
  2. duplicateString('foofoo') will be called and return 'foofoofoofoo'
  3. reverseString('foofoofoofoo') will be called and return 'oofoofoofoof'
*/
