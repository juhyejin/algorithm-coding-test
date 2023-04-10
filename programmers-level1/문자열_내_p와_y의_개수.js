function solution(s){
  const test = [...s]
  let p = 0;
  let y = 0;
  test.map(x => {
    if(x === 'p' || x === 'P'){
      p++
    }else if (x === 'y' || x==='Y'){
      y++
    }
  })
  return p === y
// 한줄로 변경하면 아래와 같음
// return s.match(/p/ig).length == s.match(/y/ig).length
}

