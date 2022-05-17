// 에러 처리 코드를 미리 등록해 두고 에러가 발생하면 에러 처리 코드로 점프하도록 하는 방법
// try ... catch ... finally문

try {
  // 실행할 코드
} catch (err) {
  // try코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행된다.
  // err에는 try코드 블록에서 발생한 Error 객체가 전달된다.
} finally {
  // 에러 발생과 상관없이 반드시 한 번 실행된다.
}

//Error 객체
//Error 생성자 함수는 에러 객체를 생성한다.

const error = new Error('invalid');

/*
생성자 함수            인스턴스
Error                 일반적 에러 객체
SyntaxError           자바스크립트 문법에 맞지 않는 문을 해석할 
ReferenceError        참조할 수 없는 식별자를 참조했을때 
TypeError             피연산자 또는 인수의 데이터 타입이 유효하지 않을 때 
RangeError            숫자값의 허용 범위를 벗어났을 때 
URIError              encodeURI 또는 decodeURI 함수에 부적절한 인수를 전달했을 때
EvalError             eval 함수에서 발생하는 에러 객체
*/

//throw 문
//Error 생성자 함수로 에러 객체를 생성한다고 에러가 발생하는 것은 아니다.
//즉 에러 객체 생성과 에러 발생은 의미가 다르다.
//에러를 발생시키려면 try 코드 블록에서 throw 문으로 에러 객체를 던져야 한다.

try {
  throw new Error('something wrong');
} catch (error) {
  console.log(error);
}

//에러는 호출자 방향으로 전파된다. 즉 콜 스택의 아래 방향으로 전파된다.

const foo = () => {
  throw Error('foo에서 발생한 에러'); //4
};

const bar = () => {
  foo(); // 3
};

const baz = () => {
  bar(); // 2
};

try {
  baz(); // 1
} catch (err) {
  console.error(err);
}

// 콜스택의 제일 아래에서부터 호출한 순서대로 스택 자료구조에 쌓이게 되고
// foo()함수에서 발생시킨 에러는 호출자의 방향 즉 4 -> 3 -> 2 -> 1 -> 전역 실행 컨텍스트 로 전파된다.
// throw된 에러를 캐치하지 않으면 호출자 방향으로 에러가 전파되고 프로그램을 강제 종료 시키게 된다.
// trhow된 에러를 어디에서도 캐치하지 않으면 프로그램은 강제 종료된다.

// 비동기 함수인 setTimeout 혹은 프로미스의 후속 처리 메서드의 콜백함수는 호출자가 없다.
// 콜 스택에 푸시된 콜백 함수의 실행 컨텍스트는 콜 스택의 가장 하부에 존재하기 때문에 에러를 전파할 호출자가 없기 때문에
