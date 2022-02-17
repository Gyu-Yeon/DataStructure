# Data Structure Course 
(app.js 참조)

## Big O Notation
- 두가지 코드중 더 좋은 코드를 고르라고 한다면, 코드가 '좋다'라는 의미는 어떤 것일까? 코드가 작동하는 속도의 빠름? 코드가 작동하는데 소요되는 메모리? 코드의 가독성? 
결론은 코드가 작동하는 빠름(Time Complexity)과 소요되는 메모리(Space Complexity)라 답할 수 있다. 
#### Time Complexity
- performance.now() 함수를 사용하여 두가지 함수를 실행한 뒤, 어떤 함수가 더 빨리 작동하는지 알아보자. app.js 1에 적힌 함수와 app.js 12에 적힌 addupTo1과 2를 비교하였을때,
1 은 Time Elasped: 1.0117000000029803 seconds. 소요됐고, 2는 Time Elasped: 0 seconds. 소요되었다고 나왔다. 하지만 매번 코드를 실행하고 이런 방법으로 더 좋은 코드를 찾아야 하기에는 
너무 번거로움으로 Time complexity를 계산하는 방법을 사용한다.
- Time complexity를 계산하는 방법은, app.js 1에 적힌 함수를 확인해보면, 반복문 안의 N이 커지면 반복문 안의 연산을 해야하는 횟수도 증가하게 된다. 그러므로 X축을 기점으로 N의 크기가 커질때, Y의 크기도 커지는걸 함수로 표기 했을때, f(n)이라고 한다. 이를 Big O notation식으로 O(n)으로 표기한다. app.js 12에 적힌 addupTo2 함수를 보게 되면 N에 값이 아무리 커지더라도 연산을 해야하는 횟수는 3번으로 더이상 늘어나지도 줄어들지도 않는다. 따라서 N의 크기가 아무리 커져도 output은 항상 3번의 연산만을 거치기 떄문에 O(n)의 Time complexity라 할 수 있다.
<!-- 2022.02.15 -->
#### Space Complexity
- 다음으로 코드의 메모리를 비교하는 방법을 알아보자. 코드의 메모리는 저장된 변수의 크기로 나눌 수 있는데, 숫자, boolean, undefined, null 은 모두 같은 크기의 Space를 차지함으로 O(1)의 Space라 한다.
- String은 String의 길이에 따라 차지하는 Space가 달라짐으로 O(n)의 Space Complexity를 갖는다 한다.
- Array나 Object들도 길이에 따라 차지하는 Space가 달라짐으로 O(n)의 Space Complexity로 구분한다.
- Space Complexity를 계산하는 방법을 알아보자. app.js 34에 sum 이라는 함수 안에는,'total' 이라는 변수와 'i' 라는 변수 2가지가 저장되어 있다. 그리고 반복문이 아무리 많이 반복돼도 이 두가지에 저장된 변수의 Space Complexity는 변하지 않는다. 왜냐하면 숫자, boolean, undefined, null은 모두 O(1)의 Space를 차지하기 때문이다. 따라서 sum 함수의 Space Complexity 는 O(1)이다.
- app.js 44에 double 함수 안에는, 'newArr' 와 'i'가 저장되어 있다. i에 저장되어 있는 수는 0으로 반복문이 아무리 많이 반복돼도 그대로 0 이지만, 'newArr'는 반복문이 반복될수록, push()함수로 인하여 Array의 길이가 늘어난다. n의 크기가 커질때, array의 크기도 같이 커지므로, 이 함수의 Space Complexity는 O(n)이라 할 수 있다.
<!-- 2022.02.16-->

#### Object vs Arrays
- Object 와 Arrays의 Big O Time complexity를 비교해보자. 결론은 Object가 대부분의 기능에서 더 빠르다. 하지만 정돈되어 있지는 않다.
##### Big O of Objects 
Insertion - O(1)
<br> Removal - O(1)
<br> Searching - O(N)
<br> Access - O(N)
- 우선 Object에 key 와 value를 추가하는 작업은 O(1)의 시간이 소요된다. Key의 단어의 길이나 value가 아무리 길어도 추가하는 작업은 한번의 동작만을 행하기 때문에 O(1)의 시간만큼만 걸린다.
- 제거를 할때도 추가와 마찬가지로 한번의 동작만을 수행하기 때문에 O(1) 시간이걸린다.
- 하지만 해당 value가 Object에 존재하는지 알아보는 Searching 작업을 위해서는 Object의 길이가 해당 동작의 시간을 좌우하기 때문에 O(N) 시간이 걸린다.
- Access를 할때도 마찬가지로 접근하고자하는 value의 위치를 먼저 알아야 함으로 O(N) 시간이 걸린다.
##### Big O of Arrays 
Insertion - it depends
<br> Removal - it depends
<br> Searching - O(N)
<br> Access - O(1)
- Array에서의 추가 작업은 Array의 마지막에 추가하는 것과 Array의 처음에 추가하는 것으로 2가지로 분류된다. 우선 Array의 마지막에 추가하는 작업은 O(1)의 시간이 소요된다. 그 이유는 Array에 추가하려는 값의 크기나 길이가 아무리 길어도 그 작업은 한번만 행해지기 때문이다. 하지만, Array의 맨 앞에 추가를 한다고 하면 상황이 다르다. app.js 92 의 'names' Array의 맨 앞에 "John"을 추가한다고 가정해보자. 기존 'names'의 값들의 index는  "Michael"(0), "Melissa"(1), "Andrea"(2) 일 것이다. 하지만 "John"(0) "Michael"(1), "Melissa"(2), "Andrea"(3)이 추가 되면서 기존 값들에 새로운 index가 부여되었고 이러한 작업은 Array의 길이에 따라 소요되는 시간이 다를 것임으로 Array에서 Insertion은 O(N) 시간이 걸린다.
- 제거하는 Removal 작업 역시 Insertion과 동일한 방식으로 동작함으로 Removal 역시 O(N) 시간이 소요된다.
- Searching 작업은 Object의 Searching과 마찬가지로 Array의 길이에 따라 동작 시간이 커지거나 작아지므로 O(N) 시간이 걸린다.
- 하지만 Array의 특정 값에 Access를 하는 것은 해당 값의 index가 필요하기 때문에 O(1) 시간이 걸린다. 그 이유는 Array.length 가 10000이라 할지라도 9000번째 값에 Access한다고 0~9000번의 모든 수를 훑고 지나가는 것이 아니기 때문이다.
<!--  2022.02.17 -->












