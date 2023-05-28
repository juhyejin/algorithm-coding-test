function solution(a, b) {
  const ab = Number(a.toString() + b.toString())
  const ba = Number(b.toString() + a.toString())
  return ab > ba ? ab : ba
}
function solution1(a, b) {
  return Math.max(Number(`${a}${b}`),Number(`${b}${a}`))
}