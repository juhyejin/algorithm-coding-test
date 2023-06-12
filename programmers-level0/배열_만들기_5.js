function solution(intStrs, k, s, l) {
  return intStrs.map((x)=> Number(x.slice(s,s+l))).filter((i)=> i > k)
}