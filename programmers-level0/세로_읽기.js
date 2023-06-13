function solution(my_string, m, c) {
  let result = [];
  for(i = 0; i < my_string.length; i += m){
    result.push(my_string.slice(i, i+m))
  }
  return result.map((x)=> x[c-1]).join('')
}

function solution1(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join('');
}