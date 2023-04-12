function solution(a, b) {
  let add = 0
  a.forEach((x,idx) => add = add +  x * b[idx] )
  return add
}

function solution1(a, b) {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}