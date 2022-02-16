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
