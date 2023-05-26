function solution(num_list) {
  let oddNum = "";
  let evenNum = "";
  num_list.map((x)=>(
    x % 2 ? oddNum += String(x) : evenNum += String(x)
  ))
  return Number(oddNum) + Number(evenNum)
}

function solution1(num_list) {
  const oddNum = num_list.filter((x)=> x % 2 === 1);
  const evenNum = num_list.filter((x)=> x%2 === 0);

  return Number(oddNum.join('')) + Number(evenNum.join(''))
}