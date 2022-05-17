// 이벤트 루프
/*
HTML 요소가 애니메이션 효과를 통해 움직이면서 이벤트를 처리
HTTP요청을 통해 서버로부터 데이터를 가지고 오면서 렌더링 하는것
즉 자바스크립트의 동시성을 지원하는것 
*/

/*
자바스크립트 엔진은 크게 콜 스택과 힙으로 구분할 수 있다. 

콜 스택 (call stack)
실행 컨텍스트가 추가되고 제거되는 스택 자료구조인 실행 컨텍스트 스택 
자바스크립트 엔진은 단 하나의 콜 스택을 사용하기 때문에 최상위 실행 컨텍스트가 
종료되어 콜 스택에서 제거되기 전까지는 다른 어떤 태스크도 실행되지 않는다.

힙 (heap)
객체가 저장되는 메모리 공간이다. 
실행 컨텍스트는 힙에 저장된 객체를 참조한다. 
구조화 되어있지 않다. (메모리의 크기를 동적으로 할당하기 때문에)
*/

// 비동기 처리에서 소스코드의 평가와 실행을 제외한 모든 처리는 자바스크립트 엔진을 구동하는 환경인 브라우저 혹은 Node.js가 담당한다.

/*
태스크 큐
비동기 함수의 콜백 함수 또는 이벤트 핸들러가 일시적으로 보관되는 영역이다. 
프로미스의 후속 처리 메서드의 콜백 함수가 일시적으로 보관되는 마이크로태스크 큐도 존재한다. 

이벤트 루프
현재 콜스택에 실행 컨텍스트가 있는지 , 태스크 큐에 대기 중인 함수가 있는지 반복해서 확인한다. 
만약 콜스택이 비어있고 태스크 큐에 대기 중인 함수가 있다면 이벤트 루프는 순차적으로 태스크 큐에 대기 중인 함수를 콜 스택으로 이동시킨다. 
즉 태스크큐에 보관된 함수들은 비동기 처리 방식으로 동작한다. 

*/

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

setTimeout(foo, 0);
bar();

// 비동기 함수인 foo 는 태스크 큐에 푸쉬되어 대기하다가 콜 스택이 비게 되면 콜 스택에 푸쉬되어 실행된다.
// 자바스크립트 엔진은 싱글 스레드로 동작한다. 하지만 브라우저는 멀티 스레드로 동작한다.
// 브라우저는 자바스크립트 엔진 외에도 렌더링 엔진 , web API를 제공한다.
// 즉 setTimeout()함수가 비동기적으로 동작하기 위해서 타이머 설정과 타이머가 만료하면 콜백 함수를 태스크 큐에 등록하는 처리는 브라우저가 실행한다.
