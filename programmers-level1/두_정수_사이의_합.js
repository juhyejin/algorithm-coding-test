function solution(a, b) {
  let addNum = 0;
  for(let i = Math.min(a,b); i <=Math.max(a,b); i++){
    addNum += i
  }
  return addNum
}