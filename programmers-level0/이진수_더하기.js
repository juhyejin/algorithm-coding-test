function solution(bin1, bin2) {
  return (parseInt(bin1,2) + parseInt(bin2, 2)).toString(2)
}

/*
* 주요개념
*
* 10진수에서 n진수로 변환
* let num = 10;
* 2진수
* num.toString(2)
* 8진수
* num.toString(8)
* 16진수
* num.toString(16)
*
* n진수에서 10진수로 변환
* 2진수 -> 10진수
* let binary = "10"
* parseInt(binary,2)
*
* 8진수 -> 10진수
* let octal = "12"
* parseInt(octal,8)
*
* 16진수 -> 10진수
* let hex = "a"
* parseInt(hex,16);
*
* */