//String.prototype.replace
//replace('검색할 문자열','치환할 문자열')

const str = 'Hello world';
str.replace('wolrd', 'lee'); // 'Hello lee'

//검색 문자열이 여럿 존재할 경우 첫 번째로 검색된 문자열만 치환한다.

const str2 = 'hello world world';
str.replace('world', 'lee'); // 'hello lee world'
