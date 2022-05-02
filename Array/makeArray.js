/*
배열의 생성방식
1.배열 리터럴
2.Array 생성자 함수
3.Array.of
*/

//배열 리터럴
const arr = [1, , , 3];
console.log(arr.length); // 4
console.log(arr); // [ 1, <2 empty items>, 3 ]
console.log(arr[1]); // undefined

//Array 생성자 함수

//전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성한다.
const arr2 = new Array(10);
console.log(arr2); // [ <10 empty items> ]
console.log(arr2.length); // 10

// 전달된 인수가 없는 경우 빈 배열을 생성한다.
console.log(new Array()); // []

//전달된 인수가 2개 이상이거나 숫자가 아닌경우 인수를 요소로 갖는 배열을 생성한다.
console.log(new Array(1, 2, 3)); // [1,2,3]
console.log(new Array({})); //  [{}]

// Array 생성자 함수는 new 연산자와 함께 호출하지 않더라도 , 즉 일반 함수로서 호출해도
// 배열을 생성하는 생성자 함수로 동작한다. , new.target을 확인하기 때문에
console.log(Array(1, 2, 3)); // [1,2,3]

//Array.of
//전달된 인수를 요소로 갖는 배열을 생성한다.

Array.of(1); // [1]
Array.of(1, 2, 3); // [1,2,3]
Array.of('string'); // ['string']

//Array.from
//유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환한다.

Array.from({ length: 2, 0: 'a', 1: 'b' }); // ['a','b']
Array.from('Hello'); // ['H','e','l','l','o']

// 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.

Array.from({ length: 3 }, (_, i) => i); // [0,1,2]
