/*
String 객체는 생성자 함수 객체다. 따라서 new 연산자와 함께 호출하여 String 인스턴스를
생성할 수 있다.
*/

const strObj = new String('Lee'); // String 래퍼 객체의 생성
console.log(strObj); // [String: 'Lee']

/*
length 프로퍼티와 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로,
각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이다.
*/

console.log(strObj[0]); // L

// 문자열은 원시 값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.

strObj[0] = 'S';
console.log(strObj); // [String: 'Lee']

// String 생성자 함수의 인수로 문자열이 아닌 값을 전달하면 인수를 문자열로 강제 변환 후
// 변환된 문자열을 할당한 String 래퍼 객체를 생성한다.

let strObj2 = new String(123);
console.log(strObj2); // [String: '123']

strObj2 = new String(null);
console.log(strObj2); // [String: 'null']

// new 연산자를 사용하지 않고 String 생성자 함수를 호출하면 문자열을 반환한다.
// 명시적 타입 변환

String(1); // '1'
String(NaN); // 'NaN'
String(Infinity); // 'Infinity'

// String 래퍼 객체는 length 프로퍼티를 갖느다.
// 유사 배열 객체이다.

console.log('Hello'.length); // 5
console.log('안녕하세요'.length); // 5
