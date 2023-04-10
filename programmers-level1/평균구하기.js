function solution(arr) {
  const addNum = arr.reduce((a,c)=> a+c);
  return addNum / arr.length
}