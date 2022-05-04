/*
String.prototype.indexOf 
인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환한다.
실패하면 -1을 반환한다.
*/

const str = 'hello world!';
str.indexOf('l'); // 2
str.indexOf('l', 3); // 3

if (str.indexOf('hello') !== -1) {
  // strdp 'hello'가 포함되어 있는경우
}

if (str.includes('hello')) {
  // 위의 구문과 동치
}
