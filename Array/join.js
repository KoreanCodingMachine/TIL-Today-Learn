//Array.prototype.join
//원본 배열의 모든 요소를 문자열로 변환한후 구분자를 연결한 문자열을 반환한다.
//구분자는 생략가능하고 기본 구분자는 컴마(,)이다

const arr = [1, 2, 3, 4];
console.log(arr.join()); // 1,2,3,4
console.log(arr.join('')); // '1234'
console.log(arr.join(':')); // '1:2:3:4'

//Array.protype.reverse
//reverse 메서드는 원본 배열의 순서를 반대로 뒤집는다.
//원본 배열이 변경된다.

const arr2 = [1, 2, 3];
const result = arr.reverse(); // [3,2,1]
console.log(arr2); // [3,2,1]
