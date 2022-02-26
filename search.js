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

function binarySearch(arr, val) {
  // left right middle 을 설정
  // val을 middle과 비교하는 while 루프 설정
  // arr[middle] == val (break point) 또는 middle <= right
  // arr[middle] < val  left 는 arr[middle+1]
  // arr[middle] > val right 는 arr[middle-1]
  // middle <  끝나도 middle을 찾지 못한다면 return -1
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[middle] == val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    } else if (arr[middle] > val) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 1   2   3   4   5
// l       m       r
//             lm  r
//                 lmr
//                  r  <  m
