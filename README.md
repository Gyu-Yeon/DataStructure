# Algorithm & Data Structure
(app.js 참조)

## Big O Notation
- 두가지 코드중 더 좋은 코드를 고르라고 한다면, 코드가 '좋다'라는 의미는 어떤 것일까? 코드가 작동하는 속도의 빠름? 코드가 작동하는데 소요되는 메모리? 코드의 가독성? 
결론은 코드가 작동하는 속도를 나타내는 Time Complexity와 소요되는 메모리 Space Complexity라 답할 수 있다. 
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
<br> Searching - O(n)
<br> Access - O(n)
- 우선 Object에 key 와 value를 추가하는 작업은 O(1)의 시간이 소요된다. Key의 단어의 길이나 value가 아무리 길어도 추가하는 작업은 한번의 동작만을 행하기 때문에 O(1)의 시간만큼만 걸린다.
- 제거를 할때도 추가와 마찬가지로 한번의 동작만을 수행하기 때문에 O(1) 시간이걸린다.
- 하지만 해당 value가 Object에 존재하는지 알아보는 Searching 작업을 위해서는 Object의 길이가 해당 동작의 시간을 좌우하기 때문에 O(N) 시간이 걸린다.
- Access를 할때도 마찬가지로 접근하고자하는 value의 위치를 먼저 알아야 함으로 O(N) 시간이 걸린다.
##### Big O of Arrays 
Insertion - it depends
<br> Removal - it depends
<br> Searching - O(n)
<br> Access - O(1)
- Array에서의 추가 작업은 Array의 마지막에 추가하는 것과 Array의 처음에 추가하는 것, 2가지로 분류된다. 우선 Array의 마지막에 추가하는 작업은 O(1)의 시간이 소요된다. 그 이유는 Array에 추가하려는 값의 크기나 길이가 아무리 길어도 그 작업은 한번만 행해지기 때문이다. 하지만, Array의 맨 앞에 추가를 한다고 하면 상황이 다르다. app.js 92 의 'names' Array의 맨 앞에 "John"을 추가한다고 가정해보자. 기존 'names'의 값들의 index는  "Michael"(0), "Melissa"(1), "Andrea"(2) 일 것이다. 하지만 "John"(0) "Michael"(1), "Melissa"(2), "Andrea"(3)이 추가 되면서 기존 값들에 새로운 index가 부여되었고 이러한 작업은 Array의 길이에 따라 소요되는 시간이 다를 것임으로 Array에서 Insertion은 O(N) 시간이 걸린다.
- 제거하는 Removal 작업 역시 Insertion과 동일한 방식으로 동작함으로 Array의 마지막 원소를 제거한다면 O(1), 하지만 Array의 맨 첫번째 원소를 제거한다면 Removal 역시 O(n) 시간이 소요된다.
- Searching 작업은 Object의 Searching과 마찬가지로 Array의 길이에 따라 동작 시간이 커지거나 작아지므로 O(n) 시간이 걸린다.
- 하지만 Array의 특정 값에 Access를 하는 것은 해당 값의 index가 필요하기 때문에 O(1) 시간이 걸린다. 그 이유는 Array.length 가 10000이라 할지라도 9000번째 값에 Access한다고 0~9000번의 모든 수를 훑고 지나가는 것이 아니기 때문이다.
<!--  2022.02.17 -->

## Recursion 
- 반복이라는 뜻으로 어떤 함수를 실행할 때 실행 과정에서 그 함수 자체가 다시 실행되는 과정을 담은 함수. Recursion은 Base case(recursion 함수의 break point)와 파라미터의 변화 이 두가지를 모두 충족시켜야 한다. Recursion 함수를 이해하기 위해서는 Stacks & Queues를 먼저 이해해야 하기 때문에 Stack & Queues를 먼저 알아보자.
#### Stacks & Queues
- Javascript는, 처음 파일을 실행시키면, 맨 윗줄부터 한줄 한줄 읽으면서 실행한다. 실행한 한줄 한줄을 Stack이라는 저장 공간에 넣으며 순서대로 쌓는데, 그렇게 쌓인 것들을 Queue라고 부른다. 이렇게 쌓인 Queue들이 실행될 때에는 Stack에 먼저 쌓인순서가 아닌, 가장 나중에 쌓인 순으로 실행된 후 Stack에서 빠져나간다. 예를 들자면, 책상위에 종이를 한장씩 쌓는다고 한다면, 맨 아래 있는 종이가 1번이 되는 것이 아니라, 맨 위에 쌓여있는 종이가 1번이 된다는 뜻이다. 
- recursion.js 4의 countDown 함수를 보게되면, 파라미터 num이 0이 아닐시 계속해서 num의 숫자가 줄면서 countDown함수가 실행되는 것을 볼 수 있는데, 이때 이 함수가 무한히 반복되지 않게 하기 위한 안전장치를 설정하는데, 그 안전장치를 break point, 또는 Base Case라고 한다. Base Case가 없는 recursive(반복적인) 함수는 Stack에 끝없이 Queue들을 쌓으며 에러를 출력하는데, 이때 이런 문제를 Stacks overflow라고 하며, 잘못된 Recursion 함수를 뜻한다. recursion.js 4의 Base case는 recursion.js 5의 if( num <= 0 ) 이다.
- 또, Recursion은 파라미터의 변화를 충족시켜야 하는데, recursion.js 4의 countDown 함수는 num이라는 파라미터가 1씩 줄어들며, 그 줄어든 num이 다시 countDown 함수의 파라미터로 쓰이는 것을 볼 수 있다. 이런 과정을 몇 번 반복하다보면, 함수의 Base case에 도달하게 되며 원하는 값이 출력된다.
- recursion.js 16의 sumRange 함수를 예로 들자면 recursion.js 17에 if(num === 1) 은 Base case 이므로, 이 함수의 파라미터 num이 1까지 줄어들어야 함수의 마지막 번째 Queue가 실행된다는 것을 알려준다. 예시로 sumRange(3)을 실행한다고 하면, Stack에는 첫번째 Queue로 num 인 3이 쌓인다. 그다음에 sumRange(2), sumRange(1)이 쌓이며, 3 + sumRange(2) + sumRange(1)이 Stack에 남게되고, sumRange(1)부터 실행되어, recursion.js 18의 1을 리턴 하며 sumRange(1)이 종료되다. 그리하여, 3 + sumRange(2) + 1 이 되고, 다음 Queue가 실행되어, 3 + 2 + 1의 식을 도출해내며 함수가 끝이난다. 
<!--  2022.02.21 -->

## Search Algorithms
- 검색 알고리즘은 이름 그대로 검색 문제를 해결하는 어떠한 알고리즘에 해당되며, Linear Search나 Binary Search를 사용하여, 일부 데이터 구조 안에 저장된 정보를 검색 하기 위해 사용된다.
#### Linear Search
- Linear Search는 검색 알고리즘 중 하나이다. 정렬되거나 정렬되지 않은 리스트가, 내가 찾는 값을 갖고 있는지 혹은, 갖고 있다면 그 값의 위치(index)는 어디인지를 쉽게 찾도록 도와준다. 예를들어, let arr = [-1,0,3,4,15]에서 숫자 4가 몇번째 있는지 알고 싶어 arr.indexOf(5)를 실행하였더니, 3이라는 숫자를 return하였다. 하지만 어떻게 이 3이라는 숫자를 return하였는지 알아보았다. 우선 arr의 첫번째 수 arr[0] = 4가 맞는지 부터 확인한다. 그렇게  arr[1], arr[2], arr[3], 까지 비교하여 true가 return되면 찾던 숫자의 인덱스를 return한다. 이런 방식은 arr의 길이가 길어질 수록 많은 시간이 걸리는 단점이 있다.만약 arr는 1부터 10000까지의 숫자를 나열한 집합체이고, 나는 9999의 위치(index)가 알고 싶어 arr.indexOf(9999)를 실행하면, 9998이라는 숫자를 return 하겠지만 이전 예시보다는 많은 시간이 걸릴 것이다. 그래서 찾고싶은 숫자가 속해있는 arr의 길이가 길어지면 길어질수록 그만큼 걸리는 시간도 늘어나기 때문에 Linear Search의 Time Complexity는  O(N)이다.
#### Bianary Search 
- Bianary Search는 또 다른 검색 알고리즘이다. 하지만 Linear Search와는 다르게 정렬된 리스트에만 사용할 수 있는 알고리즘이다. 이 알고리즘의 프로세스는 Time Complexity를 대폭 줄여주는데, search.js 16을 확인해보자. 우선 파라미터로 정렬된 숫자들의 리스트와 찾고 싶은 숫자를 정한다. 그 다음에 search.js 23,24,25,와 같이 left, right middle 이라는 인덱스 포인트를 설정한다. middle은 리스트의 가운데에 위치한 인덱스 포인트를 찾아 저장한 값이다. Math.floor( left + right) /2)으로 구할 수 있다. 그리고 left <= right를 break point로 갖는 while 반복문을 실행시킨다. while 반복문 안에서 arr[middle] 과 찾고 싶은 숫자인 val을 비교하여 두 숫자가 같으면 return middle을 하고 아닐 시 search.js 30, 33 과정으로 넘어간다. 이 과정에서, search.js 30 처럼 arr[middle] < val 이 true 이면, left = middle +1을 실행시킨다. 그 이유는 arr[middle]을 포함한 그 이전 인덱스 숫자들은 val보다 작기 때문에 비교해볼 필요가 없기 때문이다. 그리고 search.js 25의 방법으로 middle을 다시 설정해 준다. 반대 과정도 마찬가지다. search.js 33처럼 arr[middle] > val이 true라면 right = middle -1을 실행시켜 arr[middle]보다 다음에 위치한 숫자들은 비교하지 않아도 된다. 위 과정을 반복하여 left <= right이 false가 될 때까지 실행 했음에도 middle이 return되지 않는 다면, search.js 38 처럼 while 반복문 바깥에 return -1을 하여 찾고자 하는 숫자가 리스트에 포함되어 있지 않음을 알려주면 된다. Binary Search 역시 Linear Search와 마찬가지로 리스트의 길이가 길어질수록 실행해야하는 프로세스가 늘어나기 때문에 Binart Search의 Time Complexity 또한 O(N)이라 착각할 수 있다. 하지만 Binary Search는 Linear Search처럼 리스트의 모든 수와 비교하지 않아도 되기 때문에 Linear Search에 비해 훨씬 빠른 Time Complexity를 갖는다. 그렇게 Binary Search는 O(logn)의 Time complexity로 나타낼 수 있는데 그 이유는, 리스트의 숫자가 2의 배수로 늘어날때 마다 한번의 프로세스가 늘어나기 때문이다. 예를 들어 arr.length가 16이라면 최대 4번에 걸쳐 원하는 답의 인덱스나 존재하지 않음을 찾아낼 수 있고, 리스트의 길이가 32이면 최대 5번에 걸쳐 위 작업을 해낼 수 있다. 그러므로 Binary Search는 O(logn)의 Time Complexity로 나타낸다.
<!-- 2022.02.24 -->
## Sorting Algorithms
- 정렬 알고리즘이란, 자료안의 원소들을 내림차순, 오름차순, 가나다순, 과 같이 일정한 순서대로 재배열하는 알고리즘이다. Time Complexity나 Space Complexity의 효율성을 극대화 하기 위해 여러 상황에 따라 효율적인 정렬 방법을 사용해야 한다.
#### Bubble Sort
- 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘. 인접한 2개의 원소를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환(Swap)하고, 교환(Swap)이 이루어지지 않을 때까지 인접한 두 원소를 검사하여 배열을 정렬하는 알고리즘이다. 
- Bubble Sort를 실행하기 위해서는 BubbleSort.js 7의 Swap 함수에 대해 이해해야한다. arr, idx1, idx2를 파라미터로 받아 BubbleSort.js 8,9,10의 과정을 실행한다. idx1과 idx2는 위치를 바꾸고 싶은 자리에 해당하는 각각의 인덱스이고, 해당 인덱스의 숫자를 temp(임시)라는 변수에 저장하여, 재할당 하는 과정을 거치면 바꾸고 싶은 두 원소의 위치를 바꿀 수 있다.
- bubbleSort.js 33의 bubbleSort함수의 프로세스를 알아보자. 우선 반복문 안에 또 다른 반복문을 적는 nested loop를 적는다. 첫번째 반복문은 배열의 길이가 0이 되면 끝이 나도록 설정한다. 그 이유는, 첫번째 원소부터 인접한 원소끼리 비교하여 크기가 큰 원소는 오른쪽으로 점점 이동하게 되는데, 결국 배열의 오른쪽으로 갈수록 크기가 가장 큰 수가 위치하게 될 것이다. 그렇다면 다음 프로세스에서 방금 교환된 원소들을 또다시 비교하는 작업은 불필요하기 때문에, 이 과정을 생략하기 위하여 i의 시작을 배열의 길이로 설정하고 0이되면 반복문이 끝이 나도록한다. 그 다음 내부의 반복문은 0부터 시작하여 i-1까지 반복문을 실행한다. 왜냐하면 [2,4,5,2]라는 배열이 있다고 가정한다면, 마지막 2와 그 다음 존재하지 않는 숫자와 비교를 하는 불필요한 과정을 생략하기 위해서이다. 위 과정을 거쳐 인접한 두 원소를 비교하여, 더 큰 수가 오른쪽에 위치하도록 SWAP함수를 실행하면 반복문이 모두 끝나는 시점에 bubbleSort함수는 정렬된 배열를 return한다.
- Bubble sort의 Time complexity는 O(N^2)인데 그 이유는, 반복문 안에 또다른 반복문이 실행되는 nested loop를 실행하기 때문이다. 외부, 내부의 모든 반복문은 파라미터인 배열의 길이에 따라 실행 횟수가 결정되는데, 배열의 길이가 길어지면 길어질수록 실행하는 횟수가 증가하는 O(n)의 반복문이 서로 교차하기 떄문에 Time Complexity는 효율이 떨어지는 O(n^2)이다.
<!--  2022.02.26 -->
#### Selection Sort
- Selection Sort는 다음과 같은 순서로 이루어진다. 주어진 배열 중에 최소값을 찾는다. 그 값을 맨 앞에 위치한 값과 교체한다. 맨 처음 위치를 뺀 나머지 배열를 같은 방법으로 교체한다. 
- selection sort는 bubble sort와 마찬가지로 nested loop, 반복문안에 또 다른 반복문이 실행된다. 외부 반복문은 0 부터 배열의 길이보다 작을때 까지 실행되고 내부 반복문은 첫번째 반복문 실행 파라미터+1 부터 배열의 길이보다 작을 때까지 실행된다. 그 이유는, 정렬을 위해 반복문이 돌고난 뒤 외부 반복문의 실행 파라미터에 해당하는 인덱스 숫자는 이미 정렬이 된 상태이기 때문에 더 이상 다른 수와 비교를 할 필요가 없기 때문이다. selection.js 12를 보게 되면 if( min > arr[j] )라는 조건문이 성립하면 min = arr[j]가 실행된다. 이 과정의 반복문이 끝나고 나면 min의 해당하는 인덱스를 찾아 외부 반복문의 해당 반복차례에 설정되었었던 min 숫자와 자리가 교환(SWAP)된다. 위 과정의 반복문이 모두 끝나는 시점에 selectionSort함수는 정렬된 배열를 return 한다.
- Selection Sort의 Time Complexity는 Bubble Sort와 마찬가지로 외부 반복문과 내부 반복문 실행되는 nest loop를 포함하여 O(n^2)이다. 
<!--  2022.02.27 -->
#### Insertion Sort
- Insertion Sort는 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘이다. k번째 반복 후의 결과 배열은, 앞쪽 k + 1 항목이 정렬된 상태이다.
- insertion.js 8을 참고하면 외부 반복문이 실행되고 currentVal 이라는 변수에 arr[i]을 저장한다. 그리고 내부 반복문을 arr[j] > currentVal이 false 이거나 내부 반복문의 실행 파라미터인 j 가 0보다 크거나 같을때까지 실행한다. 그리고 만약 arr[j] > currentval이 true 이면  insertion.js 12를 실행하여 arr[j]의 위치가 currentVal 뒤에 위치하도록 자리 교환(Swap)을 실행한다. 그리고 arr[j] < currentVal이 true가 되는 순간이 currentVal의 위치이므로 내부 반복문이 끝이나고 insertion.js 14를 실행하여 currentVal을 해당 위치에 삽입한다. 위 과정을 반복하면 정렬된 arr를 return하게 된다. 
- Insertion Sort의 Time Complexity역시 Bubble Sort와 Selection Sort와 마찬가지로 nest loop을 담고 있기 때문에 O(N^2)이다. 
<!--  2022.02.28 -->
#### Merge Sort
- Merge Sort는 비교 기반 정렬 알고리즘이다. 파라미터인 배열이 각각의 원소를 나누어 갖게 되도록 계속해서 나눈 후 서로 비교하여 merge하면서 정렬하는 알고리즘. 
- Merge Sort를 실행하려면 우선 merge 함수를 제작해야한다. merge.js 5를 참고하면 merge 함수는 2개의 배열을 파라미터로 갖는다. merge함수를 실행하면, result, i, j 3개의 변수를 만들고 3개의 while 반복문을 실행한다. 첫번째 while 반복문은, 두 배열의 첫번째 숫자를 비교한 후 더 작은 숫자를 result에 push하여 삽입한다. 이 while 반복문의 break point는 i는 arr1이 j는 arr2의 길이보다 길어질 때이다. 둘 중 한 조건이라도 false가 될 시 첫번째 반복문은 그 즉시 중단된다. 두번째 반복문은 arr1이 arr2의 모든 숫자보다 크기가 큰 수를 포함하고 있을 때 실행된다. 예를 들어 arr1 = [1,100] arr2 = [23,13,50] 이라고 가정한다면 첫번째 반복문이 끝나고 나면 arr1 = [100] arr2 = []이 될 것이다. 여기서 두번째 반복문이 실행되어 미처 추가 되지 못한 남은 숫자를 result에 push하여 추가하고 result를 return하며 Merge Sort가 종료된다.
- Merge Sort는 파라미터인 배열이 각각의 원소를 나누어 갖도록 계속해서 나누는 작업을 실행하기 위해 recursive한 함수를 실행하게 된다. merge.js 36을 참고하면 첫번째 break point는 파라미터인 arr의 길이가 1보다 작거나 같을 때 arr를 return하는 것이다. 만약 위 조건이 맞지 않는다면, arr의 중간을 찾아 slice 메서드를 활용하여 left 와 right로 나눈다. 그리고 나눈 두 변수를 다시 mergeSort를 실행하여 arr의 길이가 1이 될 때까지 실행한다. arr = [1,4,6,2] 로 예를 들면 merge.js 38 과 39는 left = mergeSort([ 1 , 4 ])가 되고 right = mergeSort([ 6, 2 ])가 된다. 그리고 아직 arr의 길이가 1이 아니므르 다시 위 과정이 반복되어, left = mergeSort([1]) right = mergeSort([4]), left = mergeSort([6]) right = mergeSort([2])가 된다. 이렇게 [1], [4], [6], [2] arr <= 1이 true를 return 하였음으로 더이상 mergeSort는 진행되지 않고, mergeSort 40의 merge 함수가 left와 right를 파라미터하여 실행된다. [1], [4] 가 merge되어 [1,4], [6], [2]가 merge되어 [2,6]
그리고 [1.4] 와 [2,6]이 merge되어 정렬된 arr [1,2,4,6]을 return하며 함수가 종료된다.
- Merge Sort는 O(nlogn)의 Time Complexity 갖는데, 그 이유는 각각의 원소를 나누는 과정에서 배열의 길이가 아무리 커지더라도 2의 배수 만큼의 나누는 과정이 만들어지기 때문이다. 예를 들어, arr의 길이가 8이라고 한다면, 4,4, 2,2,2,2, 1,1,1,1,1,1,1,1 총 3번의 단계를 거친다. arr의 길이가 4라면 2,2, 1,1,1,1 이렇게 2단계, arr의 길이가 16이라면, 총 4단계에 걸쳐 recursion함수가 종료된다. 하지만 다시 정렬된 배열을 return하려면, O(n)만큼의 시간이 걸리는 merge함수를 실행해야 한다. merge함수는 3개의 while 반복문을 포함하여 O(3N)이라고 볼 수도 있지만, 결국 굉장히 큰 숫자의 관점에서 본다면 3은 의미가 없어지기 때문에 merge함수는 O(N)만큼의 시간이 걸린다. 따라서 배열을 나누는 과정만 놓고 본다면 O(logn)의 Time Complexity를 갖겠지만 O(n) 시간이 걸리는 merge함수도 실행해야 하므로 mergeSort는 O(nlogn)의 Time Complexity를 갖는다.
<!-- 2022.03.01 -->
#### Quick Sort
- Quick Sort은 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬 알고리즘이다.
- Quick Sort를 실행하기 위해서는 우선 파라미터 배열의 첫번째 인덱스 숫자의 정확한 위치를 반환하는 동시에, 첫번째 숫자를 정렬시킨 배열을 return하는 pivot함수를 실행해야한다. quick.js 6를 참고하면 arr, start, end 3가지를 파라미터로 갖는pivot 함수는 파라미터인 배열중, 첫번째 숫자와 배열안의 모든 수를 비교하여 해당 수보다 작으면 왼쪽에 위치시키고, 크면 오른쪽에 위치시켜 첫번째 숫자의 정확한 위치(index)를 찾아 return한다. 그리고 return한 index에 해당하는 첫번째 숫자를 해당 index로 이동시킨다. 이렇게 파라미터 배열에서 첫번째 숫자를 정렬시키는 과정을 반복하는 recursive 함수를 설계한다.
- pivot함수를 통해 얻은 첫번째 숫자의 인덱스를 기준으로 왼쪽과 오른쪽으로 나눠, 같은 프로세스를 진행시키는 recursive 함수를 실행시킨다. quick.js 27을 참고하면, left <right 가 false가 될때, recursive 함수는 종료 되고 정렬된 arr를 return하는데, 이 과정에서 왼쪽을 정렬할 때에는, pivot 함수를 실행할 때 end 파라미터를 새로 찾아낸 인덱스에 1을 뺀 숫자까지 진행해여 이전 과정에서 찾은 기준점을 다시 비교하지 않게 한다. 오른쪽을 정렬할 때에도 마찬가지로, 이전 과정에서 찾았던 기준 숫자의 인덱스 + 1을하여 기준점을 다시 비교하지 않게 하여 함수를 실행시키면 마지막에 정렬된 arr를 return한다.
- Quick Sort는 Merge Sort와 마찬가지로 평균적으로 O(nlogn)의 Time Complexity를 갖는데 한가지 다른점은, 최악의 경우의 Time Complexity가 다르다는 것이다. 다른 sorting algorithm의 Time Complexity는 모두 최악의 경우까지 고려하여 평균을 내었다면, Quick Sort는 완벽하게 정렬된 배열을 파라미터로 갖고 함수를 실행하게 되면 O(N^2)의 Time Complexity가 된다. 그 이유는, 평균적으로 merge Sort처럼 배열의 길이가 1이 될때까지 계속해서 나누는 작업이 실행되기 때문에 O(logn)만큼의 시간이 걸리고, 다시 배열의 길이만큼 첫번째 숫자와 비교를 하여 O(N)시간이 걸려, O(n)과 o(logn)의 곱인 O(nlogn)의 시간이 걸리지만, 완벽하게 정렬된 배열을 파라미터로 갖는다면 첫번째 숫자와 배열의 모든 숫자를 비교하여 첫번째 숫자의 정렬된 위치를 반환하는 함수인 pivot 함수가 배열의 길이만큼 실행되기 때문에 O(n)시간이 걸리면서 총 O(n^2)시간이 걸리게 된다.
<!--  2022.03.02 -->
#### Radix Sort
- Radix sort는 숫자의 자리수로 버킷에 담으면서 정렬하는 알고리즘이다. 특이점은, 다른 정렬 알고리즘들과는 다르게 배열안에 숫자끼리 비교없이 정렬이 가능하다는 점이다.
- Radix Sort를 실행하기 위해서는 먼저 3가지 도움 함수가 필요하다. radix.js 1, 5, 10을 참고하면 getDigit, digitCount, mostDigits 인데, getDigit는 각자리의 숫자를 알려주는 함수이다. 예를들어 430과 1을 파라미터로 설정하면, 십의 자리 숫자인 3을 return 한다. 파라미터 i가 0일시는 일의자리, 1일때는 10의자리 2일때는 100의자리, 3일때는 1000의 자리의 숫자를 return한다. 2번째 digitCount 함수는 배열에 속한 숫자의 자리수를 찾아주는 함수이다. 예를들어, 430을 파라미터로 설정하면 430은 10의 2승 보다는 크고 10의 3승보다는 작기 때문에 3자리수의 숫자라는 것을 알 수 있다. 하지만 log10을 밑수로 두기 때문에 0부터 10의10승까지의 숫자까지만 판별이 가능하다. 마지막 도움 함수인 mostDigits는 배열중에 가장 큰 수의 자리수를 return해준다.
- 위 3가지 도움 함수를 토대로 실행되는 radixSort는 우선 mostDigits함수를 실행해 배열의 가장 큰 숫자의 자리수를 찾아낸다. 그리고 radix.js 20처럼 반복문을 실행하여 digitBuckets 라는 배열을 0부터 9까지 해당하는 버킷을 만든다. 이 버킷은 [[마지막 자리 숫자가 0], [마지막 자리 숫자가 1], ...[마지막 자리 숫자가 9]] 이러한 배열로 만들어져 getDigit 함수를 실행해 각 배열에 해당하는 숫자들을 담는다. 해당 과정을 배열 중 가장 큰 수의 자리수 만큼 반복하고 radix.js 26처럼 coccat함수를 사용하여 arr를 return하면 모든 수가 비교없이 정렬된 것을 볼 수 있다.
- Radix Sort의 Time Complexity는 O(nk)이다. 다른 정렬 알고리즘과는 조금 다른데, 그 이유는 가장 큰 숫자의 자리수가 만큼 반복문이 실행되기 때문이다. 배열의 길이가 길어지면 실행되는 횟수가 많아지기 때문에 O(n)의 Time Complexity를 갖고, 그 배열 중 가장 큰 숫자의 자리수만큼 반복되는 반복문이 하나 더 생성되어 O(nk)의 Time Complexity를 갖는다.
<!-- 2022.03.03 -->

## Data Structure
- 자료구조는 컴퓨터 과학에서 효율적인 접근 및 수정을 가능케 하는 자료의 조직, 관리, 저장을 의미한다. 더 정확히 말해, 자료 구조는 데이터 값의 모임, 또 데이터 간의 관계, 그리고 데이터에 적용할 수 있는 함수나 명령을 의미한다. 
#### Singly Linked List
- 한 방향 연결 리스트라고 불리며, Node라는 실제 값을 위한 data 정보 (보통 key 값을 저장)와 인접 노드로 향하는 link 정보로 구성된 객체들의 모음이다. 이 연결 리스트는 한 방향으로만 흐른다는 특징이 있는데, 리스트의 첫번째 부분을 head라고 부르고 마지막 부분을 tail이라고 칭한다. head의 다음 부분에 접근하고 싶다면, head.next를 시작으로 모든 node에 접근할 수 있다. tail은 리스트의 마지막 이기때문에, tail.next를 한다면 null, 즉 비어있는 이라는 뜻의 null을 return한다. 그래서 head.next를 시작으로 .next로 다음 값에 접근했을 때, null이 출력되면 해당 값은 리스트의 tail이 된다.
- Singly Linked List는 배열이 주 비교 대상인데, 그 이유는 access(접근)와, insert(삽입)에서의 차이가 있기 때문이다. 우선 배열은 index라고 하는 각 데이터들에 해당하는 값이 있어, index를 알고 있다면 그 인덱스에 해당하는 값에 바로 접근을 할 수 있기 때문에 O(1)의 Time Colpexity를 갖는 반면,  SLL(Singly Linked List)는 index가 없기 때문에 어느 번째에 위치한 값을 찾으려면 O(N)의 Time Complexity가 소요된다. insert(삽입)시에는 반대로 배열은 최악의 경우인 배열 맨 앞쪽에 새로운 값을 추가하게 된다면, 새로운 값을 위해 나머지 값들의 index가 모두 수정되어야하므로, O(N)의 Time Complexity를 갖지만, SSL은 원하는 위치에 insert하는 과정만 필요하기 때문에 O(1)의 Time Compexity를 갖는다는 차이점이 있다.
<!--2022.03.15  -->
#### Doubly Linked List 
- 양 방향 연결 리스트라고 불리며, 한 방향 연결 리스트와 비숫한 구조를 갖고 있지만, 한 방향으로만 흐르는 Singly Linked List와는 다르게 Node의 값에 양 방향에서 접근을 할 수 있는 구조이다.
