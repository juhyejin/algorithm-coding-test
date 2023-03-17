function solution(emergency) {
  //숫자가 크면 급한 환자, 급한 환자 순으로 index 정렬
  const emergencySortArr = emergency.slice().sort((a,b)=> b-a); // [79, 24, 3]
  //emergencySortArr와, emergency의 값을 비교한다음 해당하는 숫자의 위치 +1을 해줌으로써 해결
  return emergency.map((value)=> emergencySortArr.indexOf(value) + 1); //[3,1,2]
}


solution([3,76,24]);

/*
* 주요 개념
* slice()
* 원본 배열은 바뀌지 않으면서 얕은 복사본을 새로운 배열 객체로 반환
* 인수를 아무것도 입력하지 않으면 배열 전체를 복사함
*
* indexOf()
* 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 존재하지 않으면 -1 반환
* 배열의 앞에서부터 탐색
* */