function solution(arr1, arr2) {
  if(arr1.length === arr2.length){
    const addArr1 = arr1.reduce((a,c)=>a+c,0);
    const addArr2 = arr2.reduce((a,c)=>a+c,0);
    return addArr1 === addArr2 ? 0 : (addArr1 > addArr2 ? 1 : -1)
  }else{
    return arr1.length < arr2.length ? -1 : 1
  }
}