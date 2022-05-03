/*
Array.prototype.splice
원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splice 메서드를 사용한다.
원본 배열을 직접 수정한다.

arr.splice(제거하기 시작할 인덱스 ,제거할 요소의 개수  ,제거한 위치에 삽입할 요소들의 목록)
*/

const arr = [1, 2, 3, 4];
const result = arr.splice(1, 2, 20, 30); // [1,20,30,4]
console.log(arr); // [2,3]

const arr2 = [1, 2, 3, 4];
const result2 = arr2.splice(1); // 1번째 인덱스부터 모두 삭제한다. // [2,3,4]

// 배열에서 특정 요소를 제거하기 위해 indexOf 메서드 + splice 메서드를 이용한다.

const arr3 = [1, 2, 3, 1, 2];

function remove(array, item) {
  const index = array.indexOf(item);

  if (index !== -1) array.splice(index, 1);
  return array;
}

// filter 메서드를 이용해 특정 요소를 제거할 수 있지만 특정 요소가 중복된경우 모두 삭제된다.

const arr4 = [1, 2, 3, 1, 2];

function removeAll(array, item) {
  return array.filter((v) => v !== item);
}

console.log(removeAll(arr, 2)); // [1,3,1]
