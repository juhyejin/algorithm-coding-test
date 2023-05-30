function solution(num_list, n) {
  const numList1 = num_list.slice(0,n)
  const numList2 = num_list.slice(n)
  return numList2.concat(numList1)
}