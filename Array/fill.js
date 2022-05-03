//Array.prototype.fill
//인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
//원본 배열을 바꾼다.
// fill(채울 값,채우기 시작할 인덱스,채우기를 멈출 인덱스)
// 세번째 인수값은 채우기를 멈출 인덱스를 포함하지 않음

const arr = [1, 2, 3, 4, 5];
arr.fill(1, 2, 4);
console.log(arr);

//Array.prototype.includes
// 배열 내에 특정 요소가 포함되어 있는지 확인하여 true or false를 반환한다.
// includes(특정 요소 , 검색을 시작할 인덱스)

const arr2 = [1, 2, 3];
arr2.includes(2); // true

//Array.prototype.flat
// 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.

[1, [2, 3, 4, 5]].flat(); // [1,2,3,4,5];

[1, [2, [3, [4]]]].flat(Infinity); // [1,2,3,4]
