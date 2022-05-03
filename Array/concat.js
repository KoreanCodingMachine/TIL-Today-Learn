// Array.prototype.concat
// 인수로 전달된 값들을 원본 매열의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 원본 배열은 변경되지 않는다. !!

const arr1 = [1, 2];
const arr2 = [3, 4];

let result = arr1.concat(arr2); // [1,2,3,4]
console.log(result);

result = arr1.concat(3);
console.log(result); // [1,2,3]

result = arr1.concat(arr2, 5); // [1,2,3,4,5]

console.log(arr1); // [1,2] 원본 배열은 변경되지 않는다.

//concat  메서드는 스프레드 문법으로 대체할 수 있다.

let result2 = [1, 2].concat([3, 4]);
console.log(result2); // [ 1, 2, 3, 4 ]

result3 = [...[1, 2], ...[3, 4]];
console.log(result3); // [ 1, 2, 3, 4 ]
