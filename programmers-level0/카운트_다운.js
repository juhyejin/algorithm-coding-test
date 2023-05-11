function solution(start, end) {
  let count = []
  for(let i = start; i >= end; i--){
    count.push(i)
  }
  return count
}

function solution1(start, end) {
  return Array.from(Array(start - end + 1), (_, i) => start - i);
}