function solution(my_string, is_suffix) {
  return my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0
}

function solution1(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0
}