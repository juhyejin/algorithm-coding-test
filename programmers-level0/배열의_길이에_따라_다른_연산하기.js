function solution(arr, n) {
  const arrLength = arr.length % 2 === 0
  if(arrLength){
    for(let i = 1; i < arr.length ; i +=2){
      arr[i] =  arr[i] + n
    }
  }else{
    for(let i = 0; i < arr.length ; i +=2){
      arr[i] =  arr[i] + n
    }
  }
  return arr
}
function solution1(arr, n) {
  return arr.map((v,i)=> arr.length % 2 ^ i%2 ? v + n : v)
}