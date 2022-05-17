// 프로미스의 후속 처리 메서드
// fulfilled 상태에 대한 후속처리 + rejected 상태에 대한 후속처리 -> then,catch,finally를 제공한다.
// 프로미스의 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백 함수가 선택적으로 호출된다.

// Promise.prototype.then
// 두 개의 콜백 함수를 인수로 전달받는다.
// 첫 번째 콜백 함수는 프로미스가 fulfilled 상태가 되면 호출된다. 콜백함수는 프로미스의 비동기 처리 결과를 인수로 전달받는다.
// 두 번째 콜백 함수는 프로미스가 rejected 상태가 되면 호출된다. 콜백함수는 프로미스의 에러를 인수로 전달받는다.

//fulfilled
new Promise((resolve) => resolve('fulfilled')).then(
  (v) => console.log(v),
  (e) => console.log(e)
);

//rejected
new Promise((_, reject) => reject(new Error('rejected'))).then(
  (v) => console.log(v),
  (e) => console.log(e)
);

//Promise.prototype.catch
//catch 메서드는 한 개의 콜백 함수를 인수로 전달받는다.
//프로미스가 rejected 상태인 경우만 호출된다.

//rejected
new Promise((_, reject) => reject(new Error('rejected'))).catch((e) =>
  console.log(e)
);

//Promise.prototype.finally
//한 개의 콜백 함수를 인수로 전달받는다. 프로미스의 성공 , 실패와 상관 없이 무조건 한 번 호출된다.

new Promise(() => {}).finally(() => console.log('finally'));
