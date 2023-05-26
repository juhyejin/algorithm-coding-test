function solution(n, control) {
  const controlData = {
    w : 1,
    s : -1,
    d : 10,
    a : -10
  }
  return [...control].reduce((a,c)=> a + controlData[c],n)
}