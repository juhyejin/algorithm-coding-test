function solution(arr) {
  const arrLength = arr.length;
 // 가장 가까운 2의 거듭제곱을 찾습니다.
 const nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(arrLength)));
 // 추가해야 할 0의 개수를 계산합니다.
 const numZerosToAdd = nextPowerOfTwo - arrLength;
 // 0으로 채운 배열을 생성합니다.
 const zeros = Array(numZerosToAdd).fill(0);
 // 원래 배열에 0을 추가합니다.
 return arr.concat(zeros);
}

function solution1(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}