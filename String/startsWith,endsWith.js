//String.prototype.startsWith
//인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true false 로 반환한다.

const str = 'Hello world';
str.startsWith('He'); // true
str.startsWith('x'); // false

// 2번째 인수로 검색을 시작할 인덱스를 지정
str.startsWith('He', 3); // false

//String.prototype.endsWith
//인수로 전달받은 문자열로 끝나는지 확인하여 true false 로 반환한다.
str.endsWith('ld'); // true
str.endsWith('x'); // false

// 2번째 인수로 검색할 문자열의 길이를 지정
str.endsWith('lo ', 5); // true
