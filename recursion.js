//basecase  where recursion ends
// different input

function countDown(num) {
  if (num <= 0) {
    console.log("All done!!!");
    return;
  }
  console.log(num);
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

console.log(sumRange(5));

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
