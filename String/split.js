//String.prototype.split
//첫 번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여
//문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다.

const str = 'how are you doing';
console.log(str.split()); // [ 'how are you doing' ]
console.log(str.split(''));
// [
//     'h', 'o', 'w', ' ', 'a',
//     'r', 'e', ' ', 'y', 'o',
//     'u', ' ', 'd', 'o', 'i',
//     'n', 'g'
//   ]
console.log(str.split(' ')); // [ 'how', 'are', 'you', 'doing' ]

//두 번째 인수로 배열의 길이를 지정할 수 있다.
console.log(str.split(' ', 3)); // [ 'how', 'are', 'you' ]

//split 메서드는 문자열을 배열로 바꾸기 때문에 배열의 메서드를 사용할 수 있다.
//문자열을 역순으로 뒤집기

function reverseString(arr) {
  arr.split('').reverse().join('');
}
