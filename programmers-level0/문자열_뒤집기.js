function solution(my_string, s, e) {
  const changeReverseString = [...my_string.slice(s,e+1)].reverse().join('');
  const prevString = my_string.slice(0,s)
  const nextString = my_string.slice(e+1)
  
  return prevString + changeReverseString + nextString
}

function solution1(my_string, s, e) {
  const arr = Array.from(my_string)
  const words = arr.slice(s, e+1)
  words.reverse()
  arr.splice(s, e - s + 1, ...words)
  return arr.join('')
}