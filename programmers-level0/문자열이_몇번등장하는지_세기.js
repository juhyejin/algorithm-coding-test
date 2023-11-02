function solution(myString, pat) {
  let sameString = 0;
  for(let i = 0; i <= myString.length-pat.length; i++){
     if(myString.slice(i, pat.length+i) === pat){
         sameString += 1
     }
  }
  return sameString
}

function solution1(myString, pat) {
  const reg = new RegExp(`(?=${pat})`, "g")
  return myString.match(reg)?.length || 0;
}