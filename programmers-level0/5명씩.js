function solution(names) {
  let test = []
  for(let i = 0; i< names.length; i += 5){
    test.push(names.slice(i, i+1)[0])
  }
  return test
}
function solution1(names) {
  return names.filter((_,idx)=> !(idx % 5))
}