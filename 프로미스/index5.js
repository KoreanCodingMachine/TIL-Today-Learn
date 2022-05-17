// 프로미스의 정적 메서드

//Promise.resolve / Promise.reject 메서드는 이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용한다.

const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log); // [1,2,3]

// 위 구문과 동치
const resolvePromise = new Promise((resolve) => resolve([1, 2, 3]));
resolvePromise.then(console.log);

const rejectedPromise = Promise.reject(new Error('error'));
rejectedPromise.catch(console.log);

const rejectePromise = new Promise((_, reject) => new Error('error')).catch(
  (err) => console.log(err)
);

//Promise.all
//Promise.all 메서드는 여러 개의 비동기 처리를 모두 병렬 처리할 때 유용하다.
//프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다.
//프로미스가 모두 fulfilled 상태가 되면 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.
//인수로 전달받은 배열의 모든 프로미스가 모두 fulfilled 상태가 되면 종료한다.
//처리 순서가 보장된다.
//인수로 전달받은 배열의 프로미스가 하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료한다.

const requsetData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const requsetData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const requsetData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.all([requsetData1, requsetData2, requsetData3])
  .then(console.log) // [1,2,3]
  .catch(console.error);

//Promise.all 메서드는 인수로 전달받은 이터러블의 요소가 프로미스가 아닌 경우 Promise.resolve 메서드를 통해 프로미스로 래핑한다.
Promise.all([1, 2, 3]).then(console.log).catch(console.log); // [1,2,3]

//Promise.race -> 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환한다.
//전달된 프로미스가 하나라도 rejected 상태가 되면 에러를 reject하는 새로운 프로미스를 즉시 반환한다.
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
])
  .then(console.log)
  .catch(console.log);

//Promise.allSettled -> 전달받은 프로미스가 모두 settled 상태가되면 처리 결과를 배열로 반환한다.

Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Error')), 1000)
  ),
]).then(console.log);

//프로미스의 후속 처리 메서드는 마이크로태스크 큐에 저장된다.
//마이크로태스크 큐는 태스크 큐보다 우선순위가 높다.

// 실행순서 -> 마이크로태스크 큐가 먼저 콜스택에 푸쉬된다.
setTimeout(() => {
  console.log(1); // 3
}, 0);

Promise.resolve()
  .then(() => console.log(2)) // 1
  .then(() => console.log(3)); // 2
