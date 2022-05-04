//String.prototype.repeat
//대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다.
//정수가 0이거나 전달받지 않으면 빈문자열 , 음수이면 RangeError를 발생시킨다.

const str = 'abc';
str.repeat(0); // ''
str.repeat(2.5); // ''
str.repeat(1); // 'abc'
str.repeat(2); // 'abcabc'
str.repeat(-1); // RangeError : Invalid count value
