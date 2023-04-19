function solution(price, money, count) {
  let add = 0
  for(let i = 1; i <= count; i++){
    add = add + price * i
  }
  return add < money ? 0 : add - money
}

