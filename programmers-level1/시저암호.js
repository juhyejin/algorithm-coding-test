function solution(s, n) {
  const sArray = []
  for(let i = 0; i<s.length; i++){
    const ASCIIcode = s.charCodeAt(i)
    let shiftASCIIcode = ASCIIcode + n

    if(ASCIIcode === 32){
      shiftASCIIcode = ASCIIcode
    }else if(ASCIIcode < 91 && shiftASCIIcode > 90 || ASCIIcode > 98 && shiftASCIIcode > 122 ){
      shiftASCIIcode = shiftASCIIcode - 26
    }

    sArray.push(String.fromCharCode(shiftASCIIcode))
  }
  return sArray.join('')
}