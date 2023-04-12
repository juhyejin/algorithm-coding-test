function solution(s) {
  const halfIndex = Math.floor(s.length/2)
  return s.length % 2 ? s[halfIndex] : s[halfIndex-1]+s[halfIndex]
}
function solution1(s){
  const halfIndex = Math.floor(s.length/2)
  return s.length % 2 ? s.slice(halfIndex-1,halfIndex) : s.slice(halfIndex-2,halfIndex)
}