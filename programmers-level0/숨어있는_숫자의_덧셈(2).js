function solution(my_string) {
  //알파벳을 기준으로 나눠줌
  //배열로 쪼개진 값을 reduce로 누산하여 계산
  //초기값 0을 지정해줌으로써 문자내에 숫자가 없으면 0을 리턴
  return my_string.split(/[a-z]/gi).reduce((acc,cur) => acc + Number(cur), 0);
}


/*
* 주요개념
* reduce()
* 배열의 왼쪽부터 콜백 함수를 실행 후 누산함
*
* */