//basecase  where recursion ends
// different input

function countDown(num) {
  if (num <= 0) {
    console.log("All done!!!");
    return;
  }
  // console.log(num);
  num--;
  countDown(num);
}

countDown(5);

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

// console.log(sumRange(5));

//factorial
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function power(n, a) {
  if (a == 0) {
    return 1;
  }
  return n * power(n, a - 1);
}

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let num = arr.pop();
  return num * productOfArray(arr);
}

function recursiveRange(n) {
  if (n === 0) {
    return 0;
  }
  return n + recursiveRange(n - 1);
}

function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

function reverse(s) {
  // 단어를 spread operator로 arr안에 저장
  // 변수 n을 만들어 새로운 단어를 arr에서 pop 한다.
  // 새로운 arr에 담긴 단어들의 조합을 join('')하여 return.

  let w = [...s];
  let newWord = [];
  for (let i = 0; i < s.length; i++) {
    newWord.push(w.pop());
    console.log(newWord);
  }
  return newWord.join("");
}

function isPalindrome(s) {
  let pal = s.split("").reverse().join("");
  if (pal == s) {
    return true;
  } else return false;
}

function someRecursive(arr) {
  // 만약 array의길이가 0 이되면 return false
  // 만약 arr 안에 홀수가 있다면 return true
  // arr.pop() % 2 으로 홀수 짝수 판단.후 arr.pop한 arr를 recursion 안에 파라미터로 설정
  if (arr.length == 0) {
    return false;
  }
  let num = arr.pop();
  console.log(arr);
  if (num % 2 != 0) {
    return true;
  } else if (num % 2 == 0) {
    arr.pop;

    return someRecursive(arr);
  }
}

// console.log(someRecursive([2, 2, 3, 4]));

function flatten(arr) {}
