function solution(a, b) {
  const ab = `${a}${b}`
  const ab2 = 2 * a * b
  return Math.max(ab,ab2)
}