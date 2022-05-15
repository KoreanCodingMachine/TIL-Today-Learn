/*
호출 스케줄링 ->함수를 명시적으로 호출하지 않고
일정 시간이 경과된 이후에 호출되도록 함수 호출을 예약하려면 타이머 함수를 사용한다.
비동기 처리방식으로 동작한다.
setTimeout()
clearTimeout()
setInterval()
clearInterval()

생성한 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout()의 경우 콜백함수는 타이머가 만료되면 단 한번 호출되고
setInterval()의 경우 콜백함수는 타이머가 만료될때마다 반복 호출된다.

타이머 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
이를 활용해 clearTimeout() , clearInterval()를 이용해 호출 스케줄링을 취소한다.
*/

//setTimeout()
//두 번째 인수로 전달받은 시간 이후 단 한번 실행되도록 호출스케줄링된다.

// 1초후 타이머가 만료되면 콜백이 호출된다 .
// setTimeout(() => console.log('hi'), 1000);

//세 번째 이후의 인수로는 콜백의 인수가 들어간다.
// setTimeout((name) => console.log(`hi! ${name}`), 1000, 'lee');

//두 번째 인수를 생략하면 기본값 0이 된다.
// setTimeout(() => console.log('hi'));

// const timerId = setTimeout(() => console.log('hi'), 1000);
// console.log(timerId);
// clearTimeout(timerId);

//setInterval()
// 두 번째 인수로 전달받은 시간으로 반복 동작하는 타이머를 생성한다.
// 타이머가 만료될 때마다 첫 번째 인수로 전달받은 콜백함수가 반복 호출된다.
// clearInterval()를 이용해 호출 스케줄링을 취소한다.

let count = 1;

const timeoutId = setInterval(() => {
  console.log(count);
  if (count++ === 5) clearInterval(timeoutId);
}, 1000);
