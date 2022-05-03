// Array.prototype.unshift
// 원본 배열의 선두에 요소를 추가 , 변경된 length 프로퍼티를 반환한다.
// 원본 배열을 직접 변경한다.
// 스프레드 문법으로 대체 가능하다.

const arr = [1, 2];
let result = arr.unshift(3, 4);
console.log(result, arr); // 4 [ 3, 4, 1, 2 ]

//Array.prototype.shift
//shift 메서드는 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
// 원본 배열을 직접 변경한다.

const arr2 = [1, 2];
let result2 = arr2.shift(); // 1
console.log(arr2); // [2]

// shift + push 메서드를 사용하여 큐를 쉽게 구현할 수 있다.
// 큐는 선입 선출의 방식의 자료구조이다.(FIFO)
