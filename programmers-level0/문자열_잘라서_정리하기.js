function solution(myString) {
  return myString.split('x').filter((x)=> x !== '').sort()
}

function solution1(myString) {
  return myString.match(/[^x]+/g).sort()
}