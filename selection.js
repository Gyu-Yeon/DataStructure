// 선택 정렬은 제자리 정렬 알고리즘의 하나로, 다음과 같은 순서로 이루어진다.
// 주어진 리스트 중에 최소값을 찾는다. 그 값을 맨 앞에 위치한 값과 교체한다.
// 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];

    for (j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
      }
      //   console.log(min);
    }

    let num = arr.indexOf(min);

    if (num != i) {
      swap(arr, i, num);
      console.log(i, num);
    }
  }
  return arr;
}
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

// arr의 인접한 두수를 비교하여 더 작은 수를 minimum으로 설정한 다음 mim과 다음수를 비교
// 마지막 수와 min 을 비교한 후 mim 을 arr의 맨 앞으로 swap
// swap이 된 수들은 이미 정렬이 되었으므로 정렬된 다음 수부터 비교 진행.
// return arr;
