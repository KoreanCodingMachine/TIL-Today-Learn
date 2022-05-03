//Array.prototype.slice
//인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다.
//원본 배열은 변경되지 않는다.
// slice(복사를 시작할 인덱스,복사를 종료할 인덱스)
const arr = [1, 2, 3];
arr.slice(0, 1); // [1]
arr.slice(1, 2); // [2]
arr.slice(1); // [2,3]
console.log(arr); // [1,2,3]
console.log(arr.slice(1, 3));

// 모든 인수를 생략하면 원본 배열의 복사본을 생성하여 반환한다.

const arr2 = [1, 2, 3];
const copy = arr2.slice();
console.log(copy); // [1,2,3]
console.log(arr2 === copy); // false , 얕은 복사를 통해 생성된다.
