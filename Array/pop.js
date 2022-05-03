// pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
//원본 배열을 직접 변경한다.

const arr = [1, 2];
let result = arr.pop();
console.log(result); // 2
console.log(arr); // [1]

// pop + push 를 사용하면 stack을 구현할 수 있다.
// stack은 후입선출의 구조이다.(LIFO)
