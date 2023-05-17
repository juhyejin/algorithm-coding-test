function solution(my_string, index_list) {
  return index_list.map((x)=>my_string[x]).join('')
  // let test = ''
  // for(let i = 0; i < index_list.length; i++){
  //     test += my_string[index_list[i]]
  // }
  // return test
}