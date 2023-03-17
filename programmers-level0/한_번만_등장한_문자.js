function solution(s) {
  //문자를 ""대로 쪼개서 배열로 저장 사전순으로 정리
  //const characterArr = s.split('').sort();
  const characterArr = [...s].sort(); //['a','a','a','b','b','c','c','d']
  // 중복된 문자가 저장될 배열
  let  duplicationCharacterArr= []; // []

  for(let i = 0 ; i < characterArr.length; i++){
    //정렬된 문자의 앞뒤가 같으면, 중복된 배열에 저장
    if(characterArr[i] === characterArr[i+1]){
      duplicationCharacterArr.push( characterArr[i]); // ['a','a','b','c','c']
    }
  }
  // 배열에서 중복되지않은 문자만 반환
  return characterArr.filter((x)=> !duplicationCharacterArr.includes(x)).join(""); // 'd'
}

solution("abcabcadc");

/*
* 주요 개념
* split()
* String 객체를 지정한 구분자를 이용하여 여러개의 문자열로 나눔.
* -> ''만 입력하는 것은 오류를 발생 시킬수 있음. [...s]로 변경
*
* filter()
* 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
*
* const arr1 = [1,2,3];
* const arr2 = [2,3,4,5];
*
* 배열의 차집합 구하기
* arr1.filter((x) => !arr2.includes(x)) [1]
*
* 배열의 교집합 구하기
* arr1.filter((x) => arr2.includes(x)) [2,3]
*
* 배열의 배타적논리합 구하기
* arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x=> !arr1.includes(x)));
*
* includes()
* 배열이 특정 요소를 포함하고 있는지 판별
*
* join()
* 배열의 모든 요소를 연결해 하나의 문자열로 만듬
*
* concat()
* 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
* 기존 배열을 변경하지 않음
* 추가된 새로운 배열을 반환
*/