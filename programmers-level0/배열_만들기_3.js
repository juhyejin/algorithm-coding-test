function solution(arr, intervals) {
  const [[a,b],[d,c]] = intervals
  return [...arr.slice(a,b+1),...arr.slice(d,c+1)]
}