function solution(my_str, n) {
  let num = []
  for(let i = 0; i < my_str.length; i += n){
    num.push(my_str.slice(i,i+n))
  }
  return num
}