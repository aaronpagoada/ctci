// One Away
// Given two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(a, b){
  let longest = a.length > b.length ? a : b
  let shortest = a.length > b.length ? b : a
  let map = {}

  for(let i = 0; i < longest.length; i++){ // O(longest)
    if(map[longest[i]] == null){
      map[longest[i]] = 1
    } else {
      map[longest[i]]++
    }
  }

  for(let i = 0; i < shortest.length; i++){ // O(shortest)
    if(map[shortest[i]] != null){
      map[shortest[i]]--
    }
  }

  if(Object.values(map).filter(value => value != 0).length < 2){ // O(n)
    return true
  }
  return false
} // O(a + b + n)

console.log(oneAway("pales", "pale")) // true
console.log(oneAway("bake", "pale")) // false