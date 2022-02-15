## Data Structure Course 
(app.js 참조)

1. Big O Notation
- 두가지 코드중 더 좋은 코드를 고르라고 한다면, 코드가 '좋다'라는 의미는 어떤 것일까? 코드가 작동하는 속도의 빠름? 코드가 작동하는데 소요되는 메모리? 코드의 가독성? 
결론은 코드가 작동하는 빠름과 소요되는 메모리라 답할 수 있다. 우선 코드가 더 빠름을 체크하기 위해서는 어떻게 해야하는가?
- performance.now() 함수를 사용하여 두가지 함수를 실행한 뒤, 어떤 함수가 더 빨리 작동하는지 알아보자. app.js 1에 적힌 함수와 app.js 12에 적힌 addupTo1과 2를 비교하였을때,
1 은 Time Elasped: 1.0117000000029803 seconds. 소요됐고, 2는 Time Elasped: 0 seconds. 소요되었다고 나왔다. 하지만 매번 코드를 실행하고 이런 방법으로 더 좋은 코드를 찾아야 하기에는 
너무 번거로움으로 Time complexity를 계산하는 방법을 사용한다.
- Big O notation의 첫번째 Time complexity를 계산하는 방법은, app.js 1에 적힌 함수를 확인해보면, for loop안의 N이 커지면 loop안의 연산을 해야하는 횟수도 증가하게 된다. 그러므로 
X축을 기점으로 N의 크기가 커질때, Y의 크기도 커지는 함수 O(n)으로 표기할 수 있다. app.js 12에 적힌 addupTo2 함수를 보게 되면 N에 값이 아무리 커지더라도 연산을 해야하는 횟수는 3번으로 
더이상 늘어나지도 줄어들지도 않는다. 따라서 N의 크기가 아무리 커져도 output은 항상 3번의 연산만을 거치기 떄문에 O(n)의 Time complexity라 할 수 있다.

2022.02.15
