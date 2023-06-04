function solution(n) {
  const nList = [n]
  while(n !== 1){
    if(n % 2 === 0){
      n = n/2
      nList.push(n)
    }else{
      n = 3*n+1
      nList.push(n)
    }
  }
  return nList
}