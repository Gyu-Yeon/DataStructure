# Algorithm & Data Structure
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

## Recursion 
- 반복이라는 뜻으로 어떤 함수를 실행할 때 실행 과정에서 그 함수 자체가 다시 실행 되는 과정을 담은 함수. Recursion은 Base case(recursion 함수의 break point)와 파라미터의 변화 이 두가지를 모두 충족시켜야 한다. Recursion 함수를 이해하기 위해서는 Stacks & Queues를 먼저 이해해야 하기 때문에 Stack & Queues를 먼저 알아보자.
#### Stacks & Queues
- Javascript는, 처음 파일을 실행시키면, 맨 윗줄부터 한줄 한줄 읽으면서 실행한다. 실행한 한줄 한줄을 Stack이라는 저장 공간에 넣으며 순서대로 쌓는데, 그렇게 쌓인 것들을 Queue라고 부른다. 이렇게 쌓인 Queue들이 실행될 때에는 Stack에 먼저 쌓인순서가 아닌, 가장 나중에 쌓인 순으로 실행된 후 Stack에서 빠져나간다. 예를 들자면, 책상위에 종이를 한장씩 쌓는다고 한다면, 맨 아래 있는 종이가 1번이 되는 것이 아니라, 맨 위에 쌓여있는 종이가 1번이 된다는 뜻이다. 
- recursion.js 4의 countDown 함수를 보게되면, 파라미터 num이 0이 아닐시 계속해서 num의 숫자가 줄면서 countDown함수가 실행되는 것을 볼 수 있는데, 이때 이 함수가 무한히 반복되지 않게 하기 위한 안전장치 break point를 Base Case라고 한다. Base Case가 없는 recursive(반복적인) 함수는 Stack에 끝없이 Queue들을 쌓으며 에러를 출력하는데, 이때 이런 문제를 Stacks overflow라고 하며, 잘못된 Recursion 함수를 뜻한다. recursion.js 4의 Base case는 recursion.js 5의 if( num <= 0 ) 이다.
- 또, Recursion은 파라미터의 변화를 충족시켜야 하는데, recursion.js 4의 countDown 함수는 num이라는 파라미터가 1씩 줄어들며, 그 줄어든 num이 다시 countDown 함수의 파라미터로 쓰이는 것을 볼 수 있다. 이런 과정을 몇 번 반복하다보면, 함수의 Base case에 도달하게 되며 원하는 값이 출력된다.
- recursion.js 16의 sumRange 함수를 예로 들자면 recursion.js 17에 if(num === 1) 은 Base case 이므로, 이 함수의 파라미터 num이 1까지 줄어들어야 함수의 마지막 번째 Queue가 실행된다는 것을 알려준다. 예시로 sumRange(3)을 실행한다고 하면, Stack에는 첫번째 Queue로 num 인 3이 쌓인다. 그다음에 sumRange(2), sumRange(1)이 쌓이며, 3 + sumRange(2) + sumRange(1)이 Stack에 남게되고, sumRange(1)부터 실행되어, recursion.js 18의 1을 리턴 하며 sumRange(1)이 종료되다. 그리하여, 3 + sumRange(2) + 1 이 되고, 다음 Queue가 실행되어, 3 + 2 + 1의 식을 도출해내며 함수가 끝이난다. 
<!--  2022.02.21 -->

## Search Algorithms
- 검색 알고리즘은 이름 그대로 검색 문제를 해결하는 어떠한 알고리즘에 해당되며, Linear Search나 Binary Search를 사용하여, 일부 데이터 구조 안에 저장된 정보를 검색 하기 위해 사용된다.
#### Linear Search
- Linear Search는 검색 알고리즘 중 하나이다. 정렬되거나 정렬되지 않은 리스트가, 내가 찾는 값을 갖고 있는지 혹은, 갖고 있다면 그 값의 위치(index)는 어디인지를 쉽게 찾도록 도와준다. 예를들어, let arr = [-1,0,3,4,15]에서 숫자 4가 몇번째 있는지 알고 싶어 arr.indexOf(5)를 실행하였더니, 3이라는 숫자를 return하였다. 하지만 어떻게 이 3이라는 숫자를 return하였는지 알아보았다. 우선 arr의 첫번째 수 arr[0] = 4가 맞는지 부터 확인한다. 그렇게  arr[1], arr[2], arr[3], 까지 비교하여 true가 return되면 찾던 숫자의 인덱스를 return한다. 이런 방식은 arr의 길이가 길어질 수록 많은 시간이 걸리는 단점이 있다.만약 arr는 1부터 10000까지의 숫자를 나열한 집합체이고, 나는 9999의 위치(index)가 알고 싶어 arr.indexOf(9999)를 실행하면, 9998이라는 숫자를 return 하겠지만 이전 예시보다는 많은 시간이 걸릴 것이다. 그래서 찾고싶은 숫자가 속해있는 arr의 길이가 길어지면 길어질수록 그만큼 걸리는 시간도 늘어나기 때문에 Linear Search의 Time Complexity는  O(N)이다.
#### Bianary Search 
- Bianary Search는 또 다른 검색 알고리즘이다. 하지만 Linear Search와는 다르게 정렬된 리스트에만 사용할 수 있는 알고리즘이다. 이 알고리즘의 프로세스는 Time Complexity를 대폭 줄여주는데, search.js 16을 확인해보자. 우선 파라미터로 정렬된 숫자들의 리스트와 찾고 싶은 숫자를 정한다. 그 다음에 search.js 23,24,25,와 같이 left, right middle 이라는 인덱스 포인트를 설정한다. middle은 리스트의 가운데에 위치한 인덱스 포인트를 찾아 저장한 값이다. Math.floor( left + right) /2)으로 구할 수 있다. 그리고 left <= right를 break point로 갖는 while 반복문을 실행시킨다. while 반복문 안에서 arr[middle] 과 찾고 싶은 숫자인 val을 비교하여 두 숫자가 같으면 return middle을 하고 아닐 시 search.js 30, 33 과정으로 넘어간다. 이 과정에서, search.js 30 처럼 arr[middle] < val 이 true 이면, left = middle +1을 실행시킨다. 그 이유는 arr[middle]을 포함한 그 이전 인덱스 숫자들은 val보다 작기 때문에 비교해볼 필요가 없기 때문이다. 그리고 search.js 25의 방법으로 middle을 다시 설정해 준다. 반대 과정도 마찬가지다. search.js 33처럼 arr[middle] > val이 true라면 right = middle -1을 실행시켜 arr[middle]보다 다음에 위치한 숫자들은 비교하지 않아도 된다. 위 과정을 반복하여 left <= right이 false가 될 때까지 실행 했음에도 middle이 return되지 않는 다면, search.js 38 처럼 while 반복문 바깥에 return -1을 하여 찾고자 하는 숫자가 리스트에 포함되어 있지 않음을 알려주면 된다. Binary Search 역시 Linear Search와 마찬가지로 리스트의 길이가 길어질수록 실행해야하는 프로세스가 늘어나기 때문에 Binart Search의 Time Complexity 또한 O(N)이라 착각할 수 있다. 하지만 Binary Search는 Linear Search처럼 리스트의 모든 수와 비교하지 않아도 되기 때문에 Linear Search에 비해 훨씬 빠른 Time Complexity를 갖는다. 그렇게 Binary Search는 O(logN)의 Time complexity로 나타낼 수 있는데 그 이유는, 리스트의 숫자가 2의 배수로 늘어날때 마다 한번의 프로세스가 늘어나기 때문이다. 예를 들어 arr.length가 16이라면 최대 4번에 걸쳐 원하는 답의 인덱스나 존재하지 않음을 찾아낼 수 있고, 리스트의 길이가 32이면 최대 5번에 걸쳐 위 작업을 해낼 수 있다. 그러므로 Binary Search는 O(logN)의 Time Complexity로 나타낸다.
<!-- 2022.02.24 -->
## Sorting Algorithms
- 정렬 알고리즘이란, 자료안의 원소들을 내림차순, 오름차순, 가나다순, 과 같이 일정한 순서대로 재배열하는 알고리즘이다. Time Complexity나 Space Complexity의 효율성을 극대화 하기 위해 여러 상황에 따라 효율적인 정렬 방법을 사용해야 한다.
#### Bubble Sort
- 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘. 인접한 2개의 원소를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환(Swap)하고, 교환(Swap)이 이루어지지 않을 때까지 인접한 두 원소를 검사하여 배열을 정렬하는 알고리즘이다. 
- Bubble Sort를 실행하기 위해서는 BubbleSort.js 7의 Swap 함수에 대해 이해해야한다. arr, idx1, idx2를 파라미터로 받아 BubbleSort.js 8,9,10의 과정을 실행한다. idx1과 idx2는 위치를 바꾸고 싶은 자리에 해당하는 각각의 인덱스이고, 해당 인덱스의 숫자를 temp(임시)라는 변수에 저장하여, 재할당 하는 과정을 거치면 바꾸고 싶은 두 원소의 위치를 바꿀 수 있다.
- bubbleSort.js 33의 bubbleSort함수의 프로세스를 알아보자. 우선 반복문 안에 또 다른 반복문을 적는 nested loop를 적는다. 첫번째 반복문은 배열의 길이가 0이 되면 끝이 나도록 설정한다. 그 이유는, 첫번째 원소부터 인접한 원소끼리 비교하여 크기가 큰 원소는 오른쪽으로 점점 이동하게 되는데, 결국 배열의 오른쪽으로 갈수록 크기가 가장 큰 수가 위치하게 될 것이다. 그렇다면 다음 프로세스에서 방금 교환된 원소들을 또다시 비교하는 작업은 불필요하기 때문에, 이 과정을 생략하기 위하여 i의 시작을 배열의 길이로 설정하고 0이되면 반복문이 끝이 나도록한다. 그 다음 내부의 반복문은 0부터 시작하여 i-1까지 반복문을 실행한다. 왜냐하면 [2,4,5,2]라는 배열이 있다고 가정한다면, 마지막 2와 그 다음 존재하지 않는 숫자와 비교를 하는 불필요한 과정을 생략하기 위해서이다. 위 과정을 거쳐 인접한 두 원소를 비교하여, 더 큰 수가 오른쪽에 위치하도록 SWAP함수를 실행하면 반복문이 모두 끝나는 시점에 bubbleSort함수는 정렬된 배열를 return한다.
- Bubble sort의 Time complexity는 O(N^2)인데 그 이유는, 반복문 안에 또다른 반복문이 실행되는 nested loop를 실행하기 때문이다. 외부, 내부의 모든 반복문은 파라미터인 배열의 길이에 따라 실행 횟수가 결정되는데, 배열의 길이가 길어지면 길어질수록 실행하는 횟수가 증가하는 O(N)의 반복문이 서로 교차하기 떄문에 Time Complexity는 효율이 떨어지는 O(N^2)이다.
// 2022.02.26
#### Selection Sort
- 선택 정렬은 다음과 같은 순서로 이루어진다. 주어진 배열 중에 최소값을 찾는다. 그 값을 맨 앞에 위치한 값과 교체한다. 맨 처음 위치를 뺀 나머지 배열를 같은 방법으로 교체한다. 
- selection sort는 bubble sort와 마찬가지로 nested loop, 반복문안에 또 다른 반복문이 실행된다. 외부 반복문은 0 부터 배열의 길이보다 작을때 까지 실행되고 내부 반복문은 첫번째 반복문 실행 파라미터+1 부터 배열의 길이보다 작을 때까지 실행된다. 그 이유는, 정렬을 위해 반복문이 돌고난 뒤 외부 반복문의 실행 파라미터에 해당하는 인덱스 숫자는 이미 정렬이 된 상태이기 때문에 더 이상 다른 수와 비교를 할 필요가 없기 때문이다. selection.js 12를 보게 되면 if( min > arr[j] )라는 조건문이 성립하면 min = arr[j]가 실행된다. 이 과정의 반복문이 끝나고 나면 min의 해당하는 인덱스를 찾아 외부 반복문의 해당 반복차례에 설정되었었던 min 숫자와 자리가 교환(SWAP)된다. 위 과정의 반복문이 모두 끝나는 시점에 selectionSort함수는 정렬된 배열를 return 한다.
- Selection Sort의 Time Complexity는 Bubble Sort와 마찬가지로 외부 반복문과 내부 반복문 실행되는 nest loop를 포함하여 기본적으로 O(N^2)이다. 
#### Insertion Sort
- 삽입 정렬은 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘이다. k번째 반복 후의 결과 배열은, 앞쪽 k + 1 항목이 정렬된 상태이다.
- insertion.js 8을 참고하면 외부 반복문이 실행되고 currentVal 이라는 변수에 arr[i]을 저장한다. 그리고 내부 반복문을 arr[j] > currentVal이 false 이거나 내부 반복문의 실행 파라미터인 j 가 0보다 크거나 같을때까지 실행한다. 그리고 insertion.js 12를 실행하여
