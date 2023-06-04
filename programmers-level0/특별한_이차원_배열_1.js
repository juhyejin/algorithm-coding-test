function solution(n) {
  const answer = []
  for(let i =0; i <n; i++){
    const inArray = Array.from({length: n}, () => 0)
    inArray[i] = 1
    answer.push(inArray)
  }
  return answer
}