// Palindrome Permutation
// Given a string, write a function to check if it is a permutation of a palindrome.

// if length is even, all letters need a pair
// if length is odd, all letters but one need a pair

function palindromePermutation(str){
  let string = str.split(" ").join("") // O(n) + O(n)
  let map = {}
  for(let i = 0; i < string.length; i++){ // O(n)
    if(map[string[i]] == null){
      map[string[i]] = 1
    } else {
      map[string[i]]++ 
    }
  }

  let freqs = Object.values(map).map(value => { // O(n)
    return value % 2
  })

  if(string.length % 2 == 0){
    if(freqs.includes(1)){
      return false
    }
    return true
  } else {
    if(freqs.filter(value => value == 1).length == 1){ // O(n)
      return true
    }
    return false
  }
} // O(4n) == O(n)

console.log(palindromePermutation("aaab")) // false
console.log(palindromePermutation("tact coa")) // true