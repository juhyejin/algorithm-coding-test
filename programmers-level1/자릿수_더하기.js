function solution(n){
  let test = [...n.toString()];
  return test.reduce((a,c) => a + Number(c),0)
}