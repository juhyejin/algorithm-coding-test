function solution(my_string) {
  const splitMyString = my_string.split(' ');

  const add = (operator, firstNum, secondNum) =>{
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    return operator === '+' ? firstNum + secondNum : firstNum - secondNum
  }

  let num = add(splitMyString[1], splitMyString[0], splitMyString[2])

  for(let i = 3; i < splitMyString.length; i +=2){
    num = add(splitMyString[i], num , splitMyString[i+1])
  }
  return num
}