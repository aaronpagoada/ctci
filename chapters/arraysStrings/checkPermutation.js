// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(a, b){
  if(a.length != b.length){
    return false
  }

  return a.split('').sort().join('') == b.split('').sort().join('')
} // O(a log a + b log b)?  

console.log(checkPermutation("aab", "baa")) // true
console.log(checkPermutation("acba", "cba")) // false

// there might be a hashmap way...