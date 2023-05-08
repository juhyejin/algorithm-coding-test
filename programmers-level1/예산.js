function solution(d, budget) {
  let allBudget = d.reduce((a,c)=> a+c, 0);
  if(allBudget === budget){
    return d.length
  }else{
    d.sort((a,c)=> a - c);
    while(allBudget > budget){
      allBudget = allBudget - d[d.length-1];
      d.pop();
    }
    return d.length
  }
}
