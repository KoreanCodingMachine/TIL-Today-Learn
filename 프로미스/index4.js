// 프로미스의 에러처리

// 1. then 메서드의 두 번째 콜백 함수로 처리
promiseGet(wrongURL).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

// 2. catch 메서드를 사용해 처리
// 비동기 처리에서 발생한 에러 뿐만이 아니라 then 메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다.
promiseGet(wrongURL)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 프로미스 체이닝
// then , catch , finally 후속처리 메서드는 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다.
// async/await를 사용하면 프로미스의 후속 처리 메서드 없이 마치 동기처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

promiseGet(wrongURL)
  .then((res) => console.log(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
