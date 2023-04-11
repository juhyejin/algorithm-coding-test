function solution(absolutes, signs) {
  signs.forEach((x,idx) => (
    x ? absolutes[idx] : absolutes[idx] = -absolutes[idx]
  ))
  return absolutes.reduce((a,c) => a + c ,0)
}

function solution1(absolutes, signs) {
  return absolutes.reduce((acc, curr, i) => acc + curr * (signs[i] ? 1 : -1), 0);
}