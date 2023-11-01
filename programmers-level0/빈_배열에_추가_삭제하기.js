function solution(arr, flag) {
  const flagNumList = flag.reduce((acc,cur,index)=>{
      if(cur){
          for(let i = 1; i <= arr[index] * 2 ; i++){
           acc.push(arr[index])
          }
      }else{
          for(let i = 1; i<= arr[index]; i++){
              acc.pop()
          }
      }
      
      return acc
  },[])
  return flagNumList
}

function solution1(arr, flag) {
  return arr.reduce(
    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
    [],
  );
}