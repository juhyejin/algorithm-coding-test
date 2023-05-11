function solution(num_list) {
  const num_list_add = Math.pow((num_list.reduce((acc,cur)=> acc+cur)),2);
  const num_list_cur = num_list.reduce((acc,cur)=> acc * cur);

  return num_list_add > num_list_cur ? 1 : 0
}