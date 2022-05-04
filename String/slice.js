//String.prototype.slice
//substring 메서드와 동일하게 동작하지만
//음수인 인수를 전달할 수 있다.
//음수의 경우 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반환한다.

const str = 'hello world';
str.substring(0, 5); // 'hello'
str.slice(0, 5); // 'hello'
str.slice(-5); // 'world'
