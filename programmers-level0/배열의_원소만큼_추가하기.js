function solution(arr) {
  const X = arr.map((x)=>(
    Array(x).fill(x)
  ))
  return X.flat()
}