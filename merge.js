// 합병 정렬 또는 병합 정렬은 O(n log n) 비교 기반 정렬 알고리즘이다.
// 일반적인 방법으로 구현했을 때 이 정렬은 안정 정렬에 속하며,
//  분할 정복 알고리즘의 하나이다. 존 폰 노이만이 1945년에 개발했다.

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// console.log(merge([1, 10, 50, 55, 60], [2, 14, 99, 100]));
let list = [1, 2, 3, 4, 5, 6, 7];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

console.log(mergeSort(list));
