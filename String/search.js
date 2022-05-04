//String.prototype.search
//정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
//검색에 실패하면 -1을 반환한다.

const str = 'Hello world';
str.search(/o/); // 4
str.search(/x/); // -1

//String.prototype.includes
//인수로 전달받은 문자열이 포함되어 있는지 확인하여
// true , false 로 반환한다.

const str2 = 'hello world';
str2.includes(''); // true
str2.includes(); // false

//includes의 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.

const str3 = 'hello world';
str3.includes('l', 3); // true
str3.includes('h', 3); // false
