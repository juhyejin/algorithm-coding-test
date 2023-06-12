function solution(a, d, included) {
  let result = 0;
  let aNum = a
  for(let i = 0; i < included.length; i++){
    if(included[i]){
      result += aNum
    }
    aNum = aNum + d
  }
  return result
}

function solution1(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc
  }, 0)
}

function solution2(a, d, included) {
  var answer = 0;
  // an = a + d(n - 1);
  for(let i = 0; i < included.length; i++) {
    if(included[i]) {
      answer += (a + (d * i))
    }
  }
  return answer;
}
