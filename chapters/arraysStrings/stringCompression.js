// String Compression
// Implement a method to perform basic string compression using the counts of repeated characters.
// If the compressed string would not become smaller than the original string, your method should return the original string.

function stringCompression(str){
  let compressed = ''
  let map = {}

  for(let i = 0; i < str.length; i++){ // O(str)
    if(map[str[i]] == null){
      map[str[i]] = 1
    } else {
      map[str[i]]++
    }
  }

  for(let char of Object.keys(map)){ // O(map)
    compressed += `${char}${map[char]}`
  }

  if(compressed.length < str.length){
    return compressed
  }
  return str
} // O(n)

console.log(stringCompression("aaaaabbbccdddd")) // a5b3c2d4
console.log(stringCompression("abcc")) // abcc

