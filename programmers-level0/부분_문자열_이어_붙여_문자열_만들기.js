function solution(my_strings, parts) {
  return  my_strings.map((x,idx)=>(
    x.slice(parts[idx][0], parts[idx][1]+1)
  )).join('')
}

function solution1(my_strings, parts) {
  return  parts.map(([a,c],idx)=>(
    my_strings[idx].slice(a, c+1)
  )).join('')
}