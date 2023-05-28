function solution(num_list) {
  const obb = num_list.filter((_,idx)=>idx % 2 === 0).reduce((a,c)=> a + c);
  const even = num_list.filter((_,idx)=>idx % 2 === 1).reduce((a,c)=> a+c);
  return Math.max(obb, even)
}