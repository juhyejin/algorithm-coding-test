function solution(s) {
  return s.split(' ').map((x)=>(
    [...x].map((s,idx)=>(
      idx % 2 ? s.toLowerCase():s.toUpperCase()
    )).join('')
  )).join(' ')
}