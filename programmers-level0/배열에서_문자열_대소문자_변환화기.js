function solution(strArr) {
  return strArr.map((x,index)=>(
    index % 2 ? x.toUpperCase() : x.toLowerCase()
  ))
}