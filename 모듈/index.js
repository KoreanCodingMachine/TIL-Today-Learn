/*
모듈이란 애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각
모듈은 자신만의 파일 스코프(모듈 스코프)를 가질 수 있어야 한다.

export -> 모듈은 공개가 필요한 자산에 한정하여 명시적으로 선택적 공개가 가능하다. 
import -> 모듈 사용자는 모듈이 공개한 자산 중 일부 또는 전체를 선택해 자신의 스코프 내로 불러들여 재사용할 수 있다.
재사용성과 유지보수에 좋다.
*/

//export 키워드
export const pi = Math.PI;

export function square(x) {
  return x * x;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}

//매번 각자 해주기 귀찮음으로 export할 대상을 하나의 객체로 구성하여 한번에 export 해주는 방식

const pi = Math.PI;

function square(x) {
  return x * x;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

export { pi, square, Person };

//import 키워드
import * as lib from '../REST API'; // index1파일의 모든 식별자를 lib이름으로 받아와 사용하겠다.

//as 키워드를 사용해 이름을 바꿔서 사용할 수도 있다.
import { pi as PI, square as sq, Person as P } from '..Ajax/';

// 모듈에서 하나의 값만 export 한다면 default 키워드를 사용할 수 있다.

// {} 없이 임의의 이름으로 import한다.

// 기본적으로 이름 없이 하나의 값을 export 한다.
// export default (x) => x + x;

// var, let , const 키워드는 사용할 수 없다.
// export default const foo = () => {} // SyntaxError:Unexpected token 'const'

// {} 없이 임의의 이름으로 import한다.
import square from '../REST API';
console.log(square(3));
