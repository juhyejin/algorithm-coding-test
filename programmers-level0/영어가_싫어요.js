function solution(numbers) {
  const num = ['zero', 'one', 'two','three','four','five','six','seven','eight','nine'];
  num.forEach((x, idx) =>{
    numbers = numbers.replaceAll(x, idx)
  })
  return Number(numbers)
}

/*
* 주요 개념
* replaceAll
* 대상 문자열을 원하는 문자 값으로 변환하는 함수
* 첫번째 매개변수는 변환하고자 하는 대상이 될 문자열
* 두번째 매개변수는 변환할 문자 값
* */
