function solution(num) {
  let count = 0
  while(num !== 1){
    num % 2 ?  num = num *3 + 1 :num = num / 2
    count++
  }
  return count <= 500 ?  count : -1
}

//위의 코드랑의 속도에서의 차이를 보여주는데 위 코드는 우선 한번만 비교하면 되지만 아래쪽은 한번더 비교를 해야하기떄문에
//속도에서 위 코드가 조금더 빠른 것을 보여준다
function solution1(num) {
    let count = 0
    while(num !== 1 && count !== 500){
        num % 2 ?  num = num *3 + 1 :num = num / 2
        count++
    }
    return num === 1 ?  count : -1
}