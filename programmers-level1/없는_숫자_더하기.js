function solution(numbers) {
  const numArray = [0,1,2,3,4,5,6,7,8,9];
  const numbersArray = numArray.filter((x)=> !numbers.includes(x))
  return numbersArray.reduce((a,c) => a+c )
}

function solution1(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}