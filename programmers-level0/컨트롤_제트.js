function solution(s) {
  let num = [];
  s.split(' ').forEach((x)=>{
    x !== 'Z' ? num.push(x) : num.pop()
  })
  return num.reduce((acc,cur)=> acc + Number(cur) ,0)
}

/*
* 주요개념
* 배열 요소에 각각대 대해 실행
* */
