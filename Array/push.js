//Array.prototype.push
//원본 배열의 마지막 요소로 추가 , 변경된 length프로퍼티 값을 반환한다. 원본 배열을 직접 변경한다.

const arr = [1, 2];
const result = arr.push(3, 4);
console.log(result); //4
console.log(arr); // [ 1, 2, 3, 4 ]

// length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가할 수 있다.
const arr2 = [1, 2];
arr2[arr2.length] = 3;
console.log(arr2); // [1,2,3]

//spread 문법

const arr3 = [1, 2];
const newArr = [...arr3, 3];
console.log(newArr); // [ 1, 2, 3 ]
