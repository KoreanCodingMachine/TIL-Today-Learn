/*
Ajax란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 
서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식 
브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다. 
*/

/*
Ajax 등장 이전 통신 방식
1.이전 웹페이지와 차이가 없어서 변경할 필요가 없는 부분까지 포함한 완전한 HTML을 서버로부터 매번 다시 전송받기 때문에 불필요한 데이터 통신이 발생
2.변경할 필요가 없는 부분까지 처음부터 렌더링 하기 때문에 화면 전환이 일어나면 순간적으로 깜빡이는 현상이 발생한다. 
3.동기 방식으로 서버와 클라이언트의 통신이 동작하기 때문에 서버로부터 응답이 있을 때까지 다음 처리는 블로킹된다. 
*/

/*
Ajax 등장 이후 통신 방식
서버로 부터 웹페이지의 변경에 필요한 데이터만 비동기 방식으로 전송받아 변경할 필요가 없는 부분은 다시 렌더링 하지 않고,
변경할 필요가 있는 부분만 한정적으로 렌더링 하는 방식이 사용 가능해졌다.
*/

//JSON은 클라이언트와 서버 간의 HTTP통신을 위한 텍스트 데이터 포맷이다. (언어 독립형 데이터 포멧 )
// 키와 값으로 구성된 순수한 텍스트이다.
// 키는 반드시 큰따옴표로 묶여야 한다. + 문자열은 반드시 큰따옴표로 묶어야 한다.

//JSON
// {
//     "name" : "LEE",
//     "age" : 20,
//     "alive" : true,
//     "hobby" : ["traveling","tennis"]
// }

//JSON.stringfy -> 객체를 JSON 포맷의 문자열로 변환
//클라이언트에서 서버로 객체를 전송하려면 객체를 문자열화 해야한다. (직렬화)

const obj = {
  name: 'lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

const json = JSON.stringify(obj);
console.log(typeof json, json); // string {"name":"lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

const prettyJson = JSON.stringify(obj, null, 2); // 들여쓰기 , 두번째 인수로 replacer 함수를 전달한다. , 세번째 인수로는 들여쓰기
console.log(typeof prettyJson, prettyJson);

function filter(key, val) {
  return typeof val === 'number' ? undefined : val;
}

const strFilter = JSON.stringify(obj, filter);
console.log(typeof strFilter, strFilter); // string {"name":"lee","alive":true,"hobby":["traveling","tennis"]}
