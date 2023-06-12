function solution(num_list) {
  let result = 0;
  num_list.forEach((x)=>{
    while(x !== 1){
      x % 2 === 0 ? x = x/2 : x = (x-1)/2
      result += 1
    }
  })
  return result
}

function solution1(num_list) {
  return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
}