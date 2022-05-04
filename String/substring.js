//String.prototype.substring
//첫 번째 인수로 전달받은 인덱스에 위치하는 문자  ~
//두 번째 인수로 전달 받은 인덱스에 위치하는 문자의 바로 이전 문자까지의
//부분 문자열을 반환한다.

const str = 'Hello world';
str.substring(0, 5); // 'Hello'

// 두 번째 인덱스는 생략할 수 있다.
// 생략할 경우 마지막 문자까지 부분 문자열을 반환한다.
str.substring(0); // 'Hello world'

/*
substring 인수의 특이 case
*/

//1.첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
str.substring(4, 1); // 'ell'

//2.인수 < 0 or NaN 인 경우 0으로 취급된다.
str.substring(-2); // 'Hello world'

//3.인수 > 문자열의 길이인 경우 인수는 문자열의 길이로 취급된다.
str.substring(1, 100); // 'ello world'
