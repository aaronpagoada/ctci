// Is Unique
// Implement an algorithm to determine if a string has all unique characters.

// First thought is to use a set

function isUnique(str){
  // set up arg length check based on given
  return new Set(str).size === str.length // O(n), n is str.length
} // O(n)

console.log(isUnique("Cat")) // true
console.log(isUnique("Deer")) // false

// What if you cannot use additional data structures?

function isUniqueAlt(str){
  // set up arg length check based on given
  for(let i = 0; i < str.length; i++){ // O(n), n is str length
    for(let j = i + 1; j < str.length; j++){ // O(n - 1)
      if(str[i] == str[j]){
        return false
      }
    }
  }

  return true
} // O(n(n - 1)) == O(n^2)

console.log(isUniqueAlt("Cat")) // true
console.log(isUniqueAlt("Deer")) // false