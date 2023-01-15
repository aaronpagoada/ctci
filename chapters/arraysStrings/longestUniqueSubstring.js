// Longest Unique Substring
// Given a string, find the length of the longest substring without repeating characters.

function longestUniqueSubstring(s){
  if(s.length == 0){
    return 0
  }

  if(s.length == 1){
    return 1
  }

  let maxLength = 0
  let longestString = []

  for(let i = 0; i < s.length; i++){
    let currentCharPosition = longestString.indexOf(s[i])

    if(currentCharPosition != -1){
      longestString.splice(0, currentCharPosition + 1)
    }

    longestString.push(s[i])
    maxLength = Math.max(longestString.length, maxLength)
  }

  return maxLength
}

console.log(longestUniqueSubstring("abccabcbb")) // 3
console.log(longestUniqueSubstring("fffffffa")) // 2