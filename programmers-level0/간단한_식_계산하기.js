function solution(binomial) {
  const binomialList = binomial.split(' ')
  const op = {
    '+' : function(a,b){
      return a + b
    },
    '-': function(a,b){
      return a - b
    },
    '*' : function(a,b){
      return a * b
    }
  }
  return op[binomialList[1]](Number(binomialList[0]),Number(binomialList[2]))
}