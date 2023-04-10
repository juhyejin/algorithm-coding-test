function solution(n) {
  let num = []
  for(let i = 0; i <= n ; i++){
    if(n % i === 0){
      num.push(i)
    }
  }
  return num.length === 0 ? 0 : num.reduce((a,c) => a + c)
}