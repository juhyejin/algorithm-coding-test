function solution(x) {
  // x.split('')와 같지만 ''만 입력하는 것은 오류를 발생 시킬 수 있기 때문에 전개연산자를 사용
  let xSeparation = [...x.toString()];
  // reduce로 자릿수의 합을 구한다음 x를 나눈 나머지가 0 인지 아닌지 판별
  return x % xSeparation.reduce((a,c) => a + Number(c), 0) === 0
}