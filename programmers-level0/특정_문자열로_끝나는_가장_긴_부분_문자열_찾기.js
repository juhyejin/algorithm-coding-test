function solution(myString, pat) {
  return myString.slice(0,myString.lastIndexOf(pat)+pat.length)
}

/*
* substring()
string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
*/
 
function solution1(myString, pat) {
  return myString.substring(0,myString.lastIndexOf(pat)) + pat
}