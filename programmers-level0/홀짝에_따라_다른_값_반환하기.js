function solution(n) {
  let arrayList = []
  const nNum = n % 2 ? 1 : 2
  for(let i = nNum; i<=n; i += 2){
    arrayList.push(i)
  }
  return nNum === 2 ? arrayList.reduce((a,c)=> a + c*c, 0) : arrayList.reduce((a,c)=> a+c)
}
function solution1(n) {
  if(n%2===1)
    return  (n+1)/2*((n + 1)/2) ;
  else
    return   n*(n+1)*(n+2)/6;
}