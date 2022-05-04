//옵셔널 체이닝 연산자
// 표기 -> ?.
// 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
// 그렇지 않으면 우항의 프로퍼티를 참조한다.

let elm = '';
let value = elm?.length; // elm이 null 또는 undefined가 아니기 때문에 length 프로퍼티 참조

//null 병합 연산자
// 표기 -> ??
// 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환
// 그렇지 않으면 좌항의 피연산자를 반환한다.
// 변수의 기본값을 설정할 때 유용하다.

let foo = null ?? 'default string'; // 좌 항이 null 이기 때문에 좌항의 피연산자 반환
console.log(foo); // 'default string'

let foo2 = '' ?? 'default string'; // 좌항의 피연산자가 Falsy 값이라도 null , undefined가
console.log(foo2); // '' //아니기 때문에 좌항의 피연산자를 그대로 반환한다.
