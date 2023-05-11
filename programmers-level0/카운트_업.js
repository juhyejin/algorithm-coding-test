function solution(start, end) {
  let num = []
  for(let i = start; i <= end; i++){
    num.push(i)
  }
  return num
}


function solution1(start, end) {
  return Array.from({length: end-start+1}, ()=> {return start++});
}