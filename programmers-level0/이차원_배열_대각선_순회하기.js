function solution(board, k) {
  let count = 0;
  board.map((x,idx)=> {
    for(let i = 0; i < x.length; i++){
      if(idx + i <= k){
        count = count + x[i]
      }
    }
  })
  return count
}