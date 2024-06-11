//first program
let amountOfFibNumbers = prompt("введите номер числа фибоначи, которое хотите получить");

function fibonacci(n) {
  if (Number.isInteger(+n)) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    return "что-то не то ввёл";
  }

}

console.log(fibonacci(amountOfFibNumbers));


//second program
function createPalindrome(num) {
  let steps = 0;
  let currentNum = num;

  while (true) {
    const str = currentNum.toString();
    const reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);

    if (str === reversedStr) {
      break;
    }

    currentNum += +reversedStr;
    steps++;
  }

  return {
    result: currentNum,
    steps: steps
  };
}

const number = 96;
const result = createPalindrome(number);
console.log(result);


//third program (рекурсия! не забыть)
function findAllVariants(arrOfNums) {
  const resArr = [];

  function recFn(start) {

    console.log(start);

    if (start === arrOfNums.length - 1) {
      resArr.push(arrOfNums.slice());
      // console.log(resArr);
      return;
    }
    for (let i = start; i < arrOfNums.length; i++) {
      // console.log([arrOfNums[start], arrOfNums[i]]);
      [arrOfNums[start], arrOfNums[i]] = [arrOfNums[i], arrOfNums[start]];
      recFn(start + 1);
      [arrOfNums[start], arrOfNums[i]] = [arrOfNums[i], arrOfNums[start]];
    }
  }

  recFn(0);
  return resArr;
}

const arrOfNums = [1, 2, 3];
console.log(findAllVariants(arrOfNums));