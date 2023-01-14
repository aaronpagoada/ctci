// Valid Anagram
// Given two strings s and t, return whether or not they are valid anagrams.

function validAnagram(s, t){
  if(s.length != t.length){
    return false
  }

  let map = {}

  for(let i = 0; i < s.length; i++){
    if(map[s[i]] == null){
      map[s[i]] = 1
    } else {
      map[s[i]]++
    }
  }

  for(i = 0; i < t.length; i++){
    if(map[t[i]] != null){
      map[t[i]]--
    }
  }

  let freqs = Object.values(map)

  for(i = 0; i < freqs.length; i++){
    if(freqs[i] != 0){
      return false
    }
  }

  return true
}

console.log(validAnagram("anagram", "nagaram")) // true 
console.log(validAnagram("cat", "rat")) // false