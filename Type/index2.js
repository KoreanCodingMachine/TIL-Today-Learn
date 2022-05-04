/*
단축평가
논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다.
표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것
*/

//단축 평가를 사용해 if문을 대체할 수 있다.

let done = true;
let message = '';

if (done) message = '완료';

message = done && '완료'; // 위 구문과 동치

//단축 평가가 유용한 경우

//1.객체를 가리키기를 기대하는 변수가 null
//또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
//객체를 가리키는 변수의 값이 객체가 아닌 null,undefined일 경우 타입 에러가 발생함

let elm = null;
let value = elm && elm.value;

//2.함수 매개변수에 기본값을 설정할 때
// 함수를 호출할 때 인수를 전달하지 않으면 undefined가 할당된다. 이때 단축평가를 이용해
// 매개변수의 기본값을 설정하면 undefined로 인해 발생하는 에러를 방지한다.

function getStringLength(str = '') {
  return str.length;
}

getStringLength('hi'); // 2
getStringLength(); //0
