//async/await을 사용하면 프로미스의 후속 처리 메서드에 콜백함수를 전달해서 비동기 처리 결과를 후속 처리할 필요 없이
//동기처럼 프로미스를 사용할 수 있다.

//async 함수
//await 키워드는 반드시 async 함수 내부에서 사용해야 한다.
//async 함수는 async 키워드를 사용해 정의하며 언제나 프로미스를 반환한다.
//암묵적으로 반환값을 resolve하는 프로미스를 반환한다.
//생성자 함수는 인스턴스를 반환해야하기 때문에 async함수를 사용할 수 없다. , async함수는 언제나 프로미스를 반환해야 한다.

async function foo(n) {
  return n;
}

const bar = async function (n) {
  return n;
};

const baz = async (n) => n;

const obj = {
  async foo(n) {
    return n;
  },
};

class MyClass {
  async bar(n) {
    return n;
  }
}

//await 키워드
//프로미스가 settled 상태가 될 때까지 대기하다가 settled 상태가 되면 프로미스가 resolve한 처리 결과를 반환한다.
//반드시 프로미스 앞에서 사용해야 한다.
//다음 실행을 일시 중지시켰다가 프로미스가 settled 상태가 되면 다시 재개한다.

// fecth함수가 반환한 프로미스가 settled 상태가 될때까지 대기하게 된다.
const fetch = require('node-fetch');

const getGithubUserName = async (id) => {
  const res = await fetch(`https://api.github.com/users/${id}`); // fetch로 비동기 요청을 했으므로 앞에 await 키워드
  const { name } = await res.json(); // 비동기 처리 결과역시 프로미스임으로 앞에 await 키워드
  console.log(name);
};

getGithubUserName('ungmo2');

async function foo() {
  const a = await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  const b = await new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const c = await new Promise((resolve) => setTimeout(() => resolve(3), 1000));

  console.log([a, b, c]);
}
foo();

// 위 구문의 비동기 처리는 개별적이기 때문에 굳이 대기해서 순차적으로 처리할 필요가 없다.

async function foo2() {
  const res = await Promise.all([
    new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
  ]);
  console.log(res);
}

foo();

async function bar(n) {
  const a = await new Promise((resolve) => setTimeout(() => resolve(n), 3000));
  const b = await new Promise((resolve) =>
    setTimeout(() => resolve(a + 1), 2000)
  );
  const c = await new Promise((resolve) =>
    setTimeout(() => resolve(b + 1), 1000)
  );
  console.log(a, b, c); // [1,2,3]
}

bar(1);

// 위 구문의 경우 앞선 비동기 처리의 결과를 가지고 다음 비동기 처리를 수행해야 하기 때문에 처리 순서가 보장되어야한다.
// 모든 프로미스에 await 키워드를 사용하여 순차적으로 처리할 수밖에 없다.

// async/await을 사용하면 try...catch 문을 사용할 수 있다.
// 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확하다.
const fetch = require('node-fetch');

const foo = async () => {
  try {
    const wrongUrl = 'wrong-url';

    const response = await fetch(wrongUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

foo();

// 혹은 async함수를 호출하고 나서 프로미승에 대한 후속처리 메서드를 사용하여 에러를 캐치할 수도 있다.
// 하지만 첫번째 방식을 사용할 경우 네트워크에서 발생한 에러 뿐만 아니라 try 코드 블록 내의 모든 문에서 발생한 에러까지 캐치할 수 있다.
