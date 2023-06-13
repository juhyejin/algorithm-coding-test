function solution(arr, queries) {
  let result = arr.slice();
  queries.forEach((x)=> {
    let a = result[x[0]]
    result[x[0]] = result[x[1]];
    result[x[1]] = a
  })
  return result
}

function solution1(arr, queries) {
  queries.forEach( ([a,b]) => {
    [arr[a],arr[b]] = [arr[b],arr[a]];
  })
  return arr;
}