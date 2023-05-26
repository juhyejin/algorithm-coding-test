function solution(num_list) {
  const num_list_length = num_list.length;
  if(num_list[num_list_length-2] < num_list[num_list_length-1]){
    num_list.push( num_list[num_list_length-1] - num_list[num_list_length-2])
  }else{
    num_list.push(num_list[num_list_length-1] * 2)
  }
  return num_list
}

function solution1(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? (a-b):a*2];
}