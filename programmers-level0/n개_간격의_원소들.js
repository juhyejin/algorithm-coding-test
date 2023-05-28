function solution(num_list, n) {
  return num_list.filter((_,idx)=> idx % n === 0)
}

function solution1(num_list, n) {
  let numList = [];
  for(let i = 0; i < num_list.length; i += n){
    numList.push(num_list[i])
  }
  return numList
}