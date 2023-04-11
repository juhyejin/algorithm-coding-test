function solution(phone_number) {
  //repeat 문자열을 반복해주는 메소드
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
}