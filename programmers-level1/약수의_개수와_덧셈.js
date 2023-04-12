function solution(left, right) {
  let num = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      num -= i
    } else {
      num += i
    }
  }
  return num
}
