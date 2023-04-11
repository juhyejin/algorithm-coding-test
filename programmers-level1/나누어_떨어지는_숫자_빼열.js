function solution(arr, divisor) {
  let num = arr.filter(v => v % divisor === 0);
  return num.length ? num.sort((a,b)=> a-b) : [-1]
}