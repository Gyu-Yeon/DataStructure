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
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ));

// 1   2   3   4   5
// l       m       r
//             lm  r
//                 lmr
//                  r  <  m

예를들어 내림차순으로 정렬된 let arr = [1,2,3,4,5]가 있다고 가정해보자. 그 중에서 나는 4의 위치(index)를 찾고싶어 Bianary Search를 사용하였더니, 3을 return하였다. Bianary Search의 프로세스를 알아보자. 우선 Bianary Search는 left(왼쪽), middle(가운데), right(오른쪽) 총 3가지의 인덱스 포인트를 갖고 시작하는데, 0을 left, arr.length-1를 right, 그리고 Math.floor((left + right) /2)한 숫자를 middle로 정한다. 그리고 내가 찾고 싶은 숫자와 arr[middle]을 비교를 하는 작업을 while 반복문으로 실행시킨다. 만약 arr[middle]과 내가 찾고 싶은 숫자를 비교하였을때, 내가 찾고 싶은 숫자가 더 크다면 left는 middle + 1으로 바뀐다. 그 이유는, arr[middle] < 4 가 true이면 arr[middle] 보다 작거나 같은 1,2,3 은 모두 내가 찾고 있는 숫자보다 작기 때문에 더 이상 비교해볼 필요가 없어지기 때문이다. 다음 과정은 left가 arr[middle+1]로 변하였으니 새로운 middle을 찾아야한다. 그렇게 middle은 새로운 Math.floor( ( left(middle+1) + right)/2) 가운데이므로 3이 된다. 이제 다시arr[middle]과 내가 찾고 있는 숫자를 비교하여 보자. arr[middle] == 4로 내가 원하던 숫자랑 동일하기 때문에 return middle을 하여 while loop를 끝낸다. 반대 과정인 arr[middle]이 내가 찾는 숫자보다 클때는 이 while 반복문의 break point는 left <= right 이다. 