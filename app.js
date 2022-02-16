function addupTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addupTo1(6));
console.log(addupTo1(3));

function addupTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addupTo2(6));

// what does better mean?
// Faster?
// less memory ?
// more readable?

let t1 = performance.now();
addupTo1(1000000000);
let t2 = performance.now();
console.log(`Time Elasped: ${(t2 - t1) / 1000} seconds.`);

let t3 = performance.now();
addupTo2(1000000000);
let t4 = performance.now();
console.log(`Time Elasped: ${(t4 - t3) / 1000} seconds.`);

//Space complexity

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4, 5]));

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double([1, 2, 3]));
