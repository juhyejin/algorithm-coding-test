function solution(a, b) {
  let aTest = !!(a % 2)
  let bTest = !!(b % 2)
  if(aTest){
    return bTest ? a**2 + b**2 : 2*(a+b)
  }else{
    return bTest ?  2*(a+b) : Math.abs(a-b)
  }
}