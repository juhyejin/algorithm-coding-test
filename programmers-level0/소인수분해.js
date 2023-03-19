//for 문 사용
function solution(n) {
  let numArray = [];
  let num = n;
  let count = 2;
  for(let i = 0; i < n ; i++){
    if(num % count === 0){
      num = num / count
      numArray.push(count)
    } else if(num === 1){
      numArray = new Set(numArray)
      break;
    }else{ count++ }
  }
  return [...numArray]
}

//while 문 사용
function solution(n) {
  let numArray = [];
  let count = 2;
  while(2 <= n){
    if(n % count === 0){
      n = n / count ;
      numArray.push(count);
    }else{
      count++;
    }
  }
  numArray = new Set(numArray)
  return [...numArray]
}

/*
* 주요개념
* 배열의 중복 제거
*
* js의 Set객체는 중복없는 데이터를 표현할수 있음.
* new Set으로 배열의 중복을 제거 후 전개연산자를 이용해 Set객체를 배열로 변환
* */
