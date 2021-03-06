/*
ES6에서 비동기 처리를 위한 또 다른 패턴으로 프로미스를 도입했다. 
콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있다.
*/

/*
xhr.onload 이벤트 핸들러는 load이벤트가 발생하면 일단 태스크 큐에 저장되어 대기하다가 ,
콜 스택이 비면 이벤트 루프에 의해 콜 스택으로 푸쉬되어 실행된다. 
즉 비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고 , 상위 스코프의 변수에 할당할 수도 없다. 
따라서 비동기 함수의 처리 결과에 대한 후속 처리는 비동기 함수 내부에서 콜백함수를 전달해야한다. 
*/
const get = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

get(url);

// get 함수는 비동기 함수다. (함수 내부에 비동기로 동작하는 코드를 포함한 함수  => onload())
// 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다. 즉
// 비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 볂수에 할당하면 기대한대로 동작하지 않는다.

const get2 = (url, successCallback, failureCallback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      successCallback(JSON.parse(xhr.response));
    } else {
      failureCallback(xhr.status);
    }
  };
};

get(url, console.log, console.error);
