/*
함수를 호출하면 실행 컨테스트 스택에 푸쉬되고 함수가 실행된다. 
함수 코드의 실행이 종료하면 함수 실행 컨텍스트는 실행 컨테스트 스택에서 팝되어 제거된다. 
-> 함수가 순차적으로 실행되는 이유 

자바스크립트 엔진은 단 하나의 실행 컨테스트 스택을 갖는다. 
즉 자바스크립트 엔진은 한 번에 하나의 태스크만 실행할 수 있는 싱글 스레드 방식으로 동작한다. 
처리에 시간이 걸리는 태스크를 실행하는 경우 블로킹(작업중단)이 발생한다. 
*/

// function sleep(func, delay) {
//   const delayUntil = Date.now() + delay;
//   while (Date.now() < delayUntil);
//   func(); // delay 이후에 callbck func를 실행한다.
// }

// function foo() {
//   console.log('foo');
// }

// function bar() {
//   console.log('bar');
// }

// sleep(foo, 3 * 1000); // 3초후에 foo함수를 실행한다.

// bar(); // bar함수는 sleep함수의 실행이 종료된 이후 호출되므로 3초이상 호출되지 못하고 블로킹 된다.

// 현재 실행중인 태스크가 종료할 때까지 다음에 실행될 태스크가 대기하는 방식 -> 동기방식
// 실행 순서가 보장되지만 태스크가 종료할 때까지 이후 태스크가 블로킹 된다는 단점이 있다.

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

setTimeout(foo, 3 * 1000); // 타이머함수 setTimeout 은 bar함수를 블로킹 하지 않는다.
bar();

// 실행중인 태스크가 종료되지 않은 상태라 해도 다음 태스크를 곧바로 실행하는 방식 -> 비동기 처리
// 실행 순서가 보장되지 않는다. 블로킹이 발생하지 않는다.
// 대표적인 비동기로 동작하는 함수 -> setTimeout , setInterval , HTTP 요청 , 이벤트 핸들러
