function solution(numbers, n) {
  let count = 0
  for(let i = 0; i <= numbers.length; i++){
    count = count+numbers[i]
    if(count > n){
      return count
    }
  }
}