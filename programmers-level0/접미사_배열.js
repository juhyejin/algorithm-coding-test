function solution(my_string) {
  let myString = []
  for(let i = 1; i <= my_string.length; i++ ){
    myString.push(my_string.slice(-i))
  }
  return myString.sort()
}