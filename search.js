// linear search

let linearSearch = function (arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

// time complexity O(N)

//binary search

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(left + right / 2);
  while (left != right) {
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      left = middle;
      middle = Math.floor(left + right / 2);
    } else if (arr[middle] > value) {
      right = middle;
      middle = Math.floor(left + right / 2);
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
