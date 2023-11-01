function solution(my_string, indices) {
  const filterMyString = [...my_string].filter((_,index)=> !indices.includes(index))
  return filterMyString.join('')
}