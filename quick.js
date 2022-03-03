// 퀵 정렬은 찰스 앤터니 리처드 호어가 개발한 정렬 알고리즘이다.
//  다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬에 속한다.
//  퀵 정렬은 n개의 데이터를 정렬할 때, 최악의 경우에는 O(n²)번의 비교를 수행하고,
//  평균적으로 O(n log n)번의 비교를 수행한다.

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, idx1, idx2) {
    temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  let num = arr[start];
  let counter = start;
  for (let i = start + 1; i <= end; i++) {
    if (num > arr[i]) {
      counter++;
      swap(arr, counter, i);
    }
  }
  swap(arr, start, counter);
  return counter;
}

let arr = [10, 8, 6, 9, 1, 2, 5, 3];

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let point = pivot(arr, left, right);
    quickSort(arr, left, point - 1);
    quickSort(arr, point + 1, right);
  }
  return arr;
}

console.log(quickSort(arr));
