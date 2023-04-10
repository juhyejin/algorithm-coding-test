function solution(x, n) {
  let array = [x];
  for(let i = 1;i < n; i++){
    array.push(array[i-1]+x)
  }
  return array
}

function anotherSolution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
