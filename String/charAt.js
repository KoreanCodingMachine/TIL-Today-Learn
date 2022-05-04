//String.prototype.charAt
//인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다.
//인덱스가 문자열의 범위를 벗어난 정수인 경우 빈 문자열을 반환한다.

const str = 'Hello';
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i)); // H e l l o
}
