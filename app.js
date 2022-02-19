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

//Big O of Objects
// Insertion - O(1);
// Removal - O(1);
// Searching - O(N);
// Access - O(N);

let instructor = {
  firstName: "kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// firstName      isInstructor    favoriteNumber

// Big O of Object Methods
// Object.keys = O(N)
console.log(Object.keys(instructor));

// Object.values = O(N)

console.log(Object.values(instructor));

// Object.entries = O(N)

console.log(Object.entries(instructor));
// hasOwnProperty = O(1)

console.log(instructor.hasOwnProperty("isInstructor"));

//Big O of Arrays
//Ordered lists

// Insertion - it Depends
// Removal - it Depends
// Searching - O(N)
// Access - O(1)

let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

//the reason why push & pop is always faster than shift & unshift

// 1. objects are fast at pretty much everything but there's no order

function validAnagram(str1, str2) {
  //먼저 string의 길이가 다르면 return false
  if (str1.length !== str2.length) {
    return false;
  }
  let word1 = [...str1];
  let word2 = [...str2];
  let obj1 = {};

  for (let w of word1) {
    obj1[w] = (obj1[w] || 0) + 1;
  }
  console.log(obj1);
  for (let i = 0; i < str1.length; i++) {
    if (obj1[word2[i]] == 0 || obj1[word2[i]] == undefined) {
      return false;
    }
    if (obj1[word2[i]] >= 1) {
      obj1[word2[i]]--;
      console.log(obj1);
    }
  }
  // loop을 word1,2를 split 하여 object에 담을것.
  // loop 을 통해 object[word2[i]] 가 1보다 크면 -- 1보다작으면 return false
  // loop를 다돌고 나온다면 return true.

  return true;
}

// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("rat", "cars"));
