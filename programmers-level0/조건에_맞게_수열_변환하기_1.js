function solution(arr) {
  return arr.map((x)=>{
    if(x >= 50 && x % 2 === 0){
      return Math.floor(x / 2)
    }else if(x < 50 && x % 2 === 1){
      return x * 2
    }else{
      return x
    }
  });
}

