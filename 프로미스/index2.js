// 비동기 함수가 또 다시 콜백함수를 사용해 비동기 함수를 호출하는 콜백함수를 선언하면 콜백 헬에 빠질 수 있다.
// 콜백 헬의 심각한 단점은 에러처리가 곤란하다.
// 이에 대한 해결책으로 ES6에서 프로미스를 도입하였다.

/*
프로미스의 생성
Promise 생성자 함수를 new 연산자와 함꼐 호추하면 프로미스 객체를 생성한다. (표준 빌트인 객체)
Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는다.
이 콜백 함수는 reslove와 reject를 인수로 전달받는다. 
*/

const promise = new Promise((resolve, rejcet) => {
  if (/*비동기 처리 성공*/ 1) {
    resolve('result');
  } else {
    rejcet('fail');
  }
});

/*
프로미스의 상태 정보 
pending -> 비동기 처리가 아직 수행되지 않은 상태 , 프로미스가 생성된 직후 기본 상태 
fulfilled -> 비동기 처리가 수행된 상태(성공) , resolve 함수 호출하여 상태조건 변경
rejected -> 비동기 처리가 수행된 상태(실패) , reject 함수 호출하여 상태조건 변경 
fulfilled , rejected 상태를 settled 상태라고 한다. (pending이 아닌 상태로 비동기 처리가 수행된 상태)
pending -> settled 는 가능하지만
settled -> 상태를 변경하는것은 불가능하다.

즉
비동기 처리 성공 시 resolve 함수를 호출하여 프로미스를 fulfilled 상태로 변경하고
비동기 처리 실패 시 reject 함수를 호출해 프로미스를 rejected 상태로 변경한다. 
프로미스의 상태는 resolve 또는 reject 함수를 호출하는 것으로 결정된다. 
즉 프로미스란 ? -> 비동기 처리 상태와 처리 결과를 관리하는 객체이다. 
*/
