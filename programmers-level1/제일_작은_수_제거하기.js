function solution(arr) {
  let minArray = [Math.min(...arr)]
  let subArray = arr.filter((x)=> !minArray.includes(x))
  return subArray.length === 0 ? [-1] : subArray ;
}