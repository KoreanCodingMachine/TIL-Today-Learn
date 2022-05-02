/*
배열에는 원본 배열을 직접 변경하는 메서드와
원본 배열을 직접 변경하지 않고 새로운 배열을 반환하는 메서드가 있다.
*/

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [ 1, 2, 3, 4 ] , push() 메서드는 원본 배열을 수정한다.

const result = arr.concat(3);
console.log(result); // [ 1, 2, 3, 4, 3 ]
console.log(arr); // [ 1, 2, 3, 4 ] , concat() 메서드는 원본 배열을 수정하지 않는다.

/*
Array.isArray
전달된 인수가 배열이면 true, 아니면 false를 반환한다.
*/

/*
Array.prototype.indexOf
원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.
*/

const arr2 = [1, 2, 2, 3];
arr.indexOf(2); // 1
arr.indexOf(4); // -1
console.log(arr.indexOf(2, 3)); // 2번쨰 인수는 검색을 시작할 인덱스이다. -1
console.log(arr.indexOf(2, 2)); // 2
console.log(arr.indexOf(1)); // 0
