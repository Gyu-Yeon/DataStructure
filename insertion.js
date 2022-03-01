// 삽입 정렬은 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여,
// 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘이다.
//  k번째 반복 후의 결과 배열은, 앞쪽 k + 1 항목이 정렬된 상태이다.
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// function insertionSort(arr) {
//   for (var i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//       console.log(arr);
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
