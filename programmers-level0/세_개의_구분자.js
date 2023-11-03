function solution(myStr) {
  let saveString = ''
  let test = []
  const result = [...myStr].forEach((text)=>{
      if(['a','b','c'].includes(text)){
          if(saveString.length !== 0){
              test.push(saveString);
              saveString = ''
          }
      }else{
          saveString = saveString + text;
      }
  })
  test.push(saveString)
  return test[0].length !== 0 ? test : ['EMPTY']
}

/*
  코드가 너무 지저분하고 한눈에 알아보기가 어렵다.
*/

function solution1(myStr) {
  return myStr.match(/[^a-c]+/g)||['EMPTY']
}
function solution2(myStr) {
  const arr = myStr.split(/[abc]/).filter(e => e);
  return arr.length == 0 ? ["EMPTY"] : arr;
}
/**
 * match함수와 split 정규식을 통해서 간단하게 해결할 수 있다는걸 배웠다.
 * 
 */